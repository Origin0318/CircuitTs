using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using Newtonsoft.Json;

#if UNITY_EDITOR
using UnityEditor;
#endif

[Serializable]
public class Meta
{
    public SourceSize size;
}

[Serializable]
public class Frame
{
    public int x;
    public int y;
    public int w;
    public int h;
}

[Serializable]
public class SpriteSourceSize
{
    public int x;
    public int y;
    public int w;
    public int h;
}

[Serializable]
public class SourceSize
{
    public int w;
    public int h;
}

[Serializable]
public class SpriteData
{
    public Frame frame;
    public bool rotated;
    public bool trimmed;
    public SpriteSourceSize spriteSourceSize;
    public SourceSize sourceSize;
}

[Serializable]
public class SpriteDataRoot
{
    public Dictionary<string, SpriteData> frames = new Dictionary<string, SpriteData>();
    public Meta meta;
}

public class TextureData
{
    public Texture2D texture2D;
    public string path;
}

public class TextureCutManager
{
    private static SpriteDataRoot spriteDataRoot;
    private static string[] jsonPaths;
    private static string[] spritePaths;

    public static string[] JsonPath
    {
        get
        {
            return jsonPaths;
        }
    }

    public static string[] SpritePaths
    {
        get
        {
            return spritePaths;
        }
    }

    public static List<TextureData> GetTextures()
    {
        List<TextureData> textureDatas = new List<TextureData>();
        if (jsonPaths == null || spritePaths == null)
            return textureDatas;

        for (int i = 0; i < jsonPaths.Length; i++)
        {
            if (i > spritePaths.Length)
                break;

            string jsonPath = jsonPaths[i];
            string spritePath = spritePaths[i];

            byte[] buffer = ReadBytes(spritePath);
            if (buffer == null)
                continue;

            ReadJson(jsonPath);
            Texture2D texture2D = BytesToTexture2D(buffer);
            if (texture2D == null)
                continue;

            TextureData textureData = new TextureData();
            textureData.texture2D = texture2D;
            textureData.path = spritePath;
            textureDatas.Add(textureData);

            return textureDatas;
        }

        return textureDatas;
    }

    public static void CurTexture2D(Texture2D texture2D, string cutPath)
    {
        if (spriteDataRoot == null)
            return;

        float index = 0;
        cutPath = cutPath.Substring(0, cutPath.LastIndexOf("."));
        //切割到texture所在目录
        string outPath = Path.GetFullPath(cutPath + "/../Sprites/");

        foreach (KeyValuePair<string, SpriteData> value in spriteDataRoot.frames)
        {
            Frame frame = value.Value.frame;
            SpriteSourceSize spriteSourceSize = value.Value.spriteSourceSize;
            SourceSize sourceSize = value.Value.sourceSize;

            try
            {
                Texture2D tex = new Texture2D(spriteSourceSize.w, spriteSourceSize.h);
                Color[] colors = null;
                int x = frame.x;

                //Texturepacker坐标系是左上角
                int y = spriteDataRoot.meta.size.h - frame.y - frame.h;
                int blockWidth = frame.w;
                int blockHeight = frame.h;

                colors = texture2D.GetPixels(x, y, blockWidth, blockHeight);

                tex.SetPixels(colors);
                tex.Apply();

                if (!Directory.Exists(outPath))
                    Directory.CreateDirectory(outPath);

                string spriteName = value.Key;
                string[] spriteNames = spriteName.Split('/');
                if (spriteNames.Length > 1)
                    spriteName = spriteNames[1];

                string pngOutPath = outPath + spriteName;
                SavePng(pngOutPath, tex);

#if UNITY_EDITOR
                index++;
                float progress = (float)(index / spriteDataRoot.frames.Count);
                string tile = Path.GetFileNameWithoutExtension(cutPath) + " 切割中...";
                string info = string.Format("{0}/{1},SpriteName: {2}", index, spriteDataRoot.frames.Count, spriteName);
                EditorUtility.DisplayProgressBar(tile, info, progress);
#else
#endif
            }
            catch (Exception e)
            {
                Debug.LogError(e.Message + " Path: " + cutPath);
            }
        }
    }

    public static void FindPath(string rootPath)
    {
        jsonPaths = Directory.GetFiles(rootPath, "*.jsongv");
        spritePaths = Directory.GetFiles(rootPath, "*.png");
    }

    public static byte[] ReadBytes(string path)
    {
        byte[] buffer = null;
        if (string.IsNullOrEmpty(path))
            return buffer;

        if (!File.Exists(path))
            return buffer;

        try
        {
            buffer = File.ReadAllBytes(path);
        }
        catch (Exception e)
        {
            Debug.LogError(e);
        }

        return buffer;
    }

    public static Texture2D BytesToTexture2D(byte[] bytes)
    {
        int width = spriteDataRoot.meta.size.w;
        int height = spriteDataRoot.meta.size.h;
        Texture2D texture = new Texture2D(width, height);
        texture.LoadImage(bytes);
        return texture;
    }

    public static void SavePng(string path, Texture2D tex)
    {
        if (string.IsNullOrEmpty(path))
            return;

        if (tex == null)
            return;

        FileStream fileStream = null;
        BinaryWriter binaryWriter = null;

        try
        {
            byte[] bytes = tex.EncodeToPNG();
            fileStream = File.Open(path, FileMode.Create);
            binaryWriter = new BinaryWriter(fileStream);
            binaryWriter.Write(bytes);
        }
        catch (Exception e)
        {
            Debug.LogError(e.Message);
        }
        finally
        {
            if (fileStream != null)
            {
                fileStream.Close();
                fileStream.Dispose();
            }

            if (binaryWriter != null)
            {
                binaryWriter.Close();
                binaryWriter.Dispose();
            }
        }
    }

    public static void ReadJson(string path)
    {
        if (!File.Exists(path))
            return;

        StreamReader streamReader = null;
        try
        {
            streamReader = new StreamReader(path);
            if (streamReader == null)
                return;

            string json = streamReader.ReadToEnd();
            if (json.Length <= 0)
                return;

            spriteDataRoot = JsonConvert.DeserializeObject<SpriteDataRoot>(json);
        }
        catch (Exception e)
        {
            Debug.LogError(e);
        }
        finally
        {
            if (streamReader != null)
            {
                streamReader.Close();
                streamReader.Dispose();
            }
        }
    }
}

