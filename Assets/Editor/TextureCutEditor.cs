using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using System;
using System.IO;

public class TextureCutEditor
{
    private static string textureRoot = "Assets/UIResources/Atlas/";

    [MenuItem("Tools/切割所有图集")]
    public static void CutAllAtlas()
    {
        string[] directories = Directory.GetDirectories(textureRoot);
        for (int i = 0; i < directories.Length; i++)
        {
            CutAtlas(directories[i]);
        }

        EditorUtility.ClearProgressBar();
        string info = string.Format("图集切割完成, 图集数量: {0}", directories.Length);
        EditorUtility.DisplayDialog("切割图片", info, "ok");
    }

    [MenuItem("Assets/切割当前文件夹下的图集")]
    public static void CurCurrentDirectoryAtlas()
    {
        string path = AssetDatabase.GetAssetPath(Selection.activeObject);
        CutAtlas(path);
        EditorUtility.ClearProgressBar();
        EditorUtility.DisplayDialog("切割图片", "图集切割完成, 图集数量: 1", "ok");
    }

    private static void CutAtlas(string rootPath)
    {
        TextureCutManager.FindPath(rootPath);
        List<TextureData> textureDatas = TextureCutManager.GetTextures();
        for (int i = 0; i < textureDatas.Count; i++)
        {
            TextureData textureData = textureDatas[i];
            TextureCutManager.CurTexture2D(textureData.texture2D, textureData.path);
        }

        AssetDatabase.Refresh();
    }
}

