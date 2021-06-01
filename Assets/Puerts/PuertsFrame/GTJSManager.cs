using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Puerts;
using UnityEngine;

namespace GT
{
    public class GTJSManager : MonoBehaviour,ILoaderFileGetter
    {
        private static GTJSManager mInstance;
        private JsEnv mjsEnv;
        private GTJSLoader mjsLoader;
        public Dictionary<string, string> mFilesCache = new Dictionary<string, string>();

        public Action JsUpdate;
        public Action JsOnApplicationQuit;
        public Action JsOnDispose;

        public JsEnv JsEnv
        {
            get => mjsEnv;
        }

        public GTJSLoader JsLoader
        {
            get => mjsLoader;
        }

        void Awake()
        {
            mInstance = this;
        }

        public static GTJSManager Instance
        {
            get {
                if(mInstance == null)
                {
                    GameObject go = new GameObject("GTJSManager");
                    mInstance = go.AddComponent<GTJSManager>();
                }
                return mInstance;
            }
        }

        /// <summary>
        /// 初始化
        /// </summary>
        public void Init()
        {
            if (JsEnv == null)
            {
                string debugPath = Application.dataPath  + "/GameMain/JSScripts/";
                mjsLoader = new GTJSLoader(this,debugPath);
                mjsEnv = new JsEnv(JsLoader);
            }
        }

        /// <summary>
        /// Update函数
        /// </summary>
        void Update()
        {
            JsUpdate?.Invoke();
            mjsEnv?.Tick();
        }

        public Dictionary<string, string> GetFiles()
        {
            return mFilesCache;
        }

        public async Task PreloadJS(string jsLabel)
        {
            await Task.Delay(1);
           
            /*
            Lab3d.GameEntry.Resource.LoadAsset(AssetUtility.GetMaterialAsset(mat), Constant.AssetPriority.UISpriteAsset,
                new LoadAssetCallbacks(
                    (assetName, asset, duration, userData) =>
                    {
                        outlineFillMaterial = asset as Material;
                    },

                    (assetName, status, errorMessage, userData) =>
                    {
                        Log.Error("Can not load materials '{0}' with error message '{1}'.", mat, errorMessage);
                    }));

            var list = await Addressables.LoadAssetsAsync<TextAsset>(jsLabel, null).Task;
            if (list != null)
            {
                mFilesCache.Clear();
                foreach (var txt in list)
                {
                    mFilesCache.Add($"{txt.name}.js", txt.text);
                }
                return true;
            }
            else
            {
                Debug.LogError("加载JS失败......");
                return false;
            }
            */
        }



        async Task InitJsEnv()
        {
            //预加载JS ，在JSEnv初始化前调用
            //await ResourceManager.PreloadJS(AddressableConfig.JSLable);

            await Task.Delay(1);
            string debugPath = Application.dataPath + "/GameMain/JSScripts/";
            //调试端口：8080
            mjsEnv = new JsEnv(new GTJSLoader(this, debugPath), 8088);
            
            if (mjsEnv == null)
            {
                Debug.LogError("InitJsEnv null!!!");
            }

            //声明Action： 值类型才需要这样添加
            mjsEnv.UsingAction<float>();
            mjsEnv.UsingAction<float, float>();
            mjsEnv.UsingAction<string, byte[]>();

        }

        public async void StartGame()
        {
            await InitJsEnv();

            if (mjsEnv != null)
            {
                try
                {
                    mjsEnv.Eval(@"require('bundle')");

                }
                catch (Exception e)
                {
                    Debug.LogError(e.ToString());
                }

            }
        }

        /// <summary>
        /// 重新启动
        /// </summary>
        public async void Restart()
        {
            Dispose();

            await InitJsEnv();
            StartGame();
        }

        /// <summary>
        /// 应用退出
        /// </summary>
        private void OnApplicationQuit()
        {
            if (mjsEnv != null)
            {
                JsOnApplicationQuit?.Invoke();
            }
        }

        /// <summary>
        /// 释放
        /// </summary>
        public void Dispose()
        {
            JsOnDispose?.Invoke();

            if (mjsEnv != null)
            {
                try
                {
                    mjsEnv.Dispose();
                    mjsEnv = null;
                }
                catch (Exception ex)
                {
                    string msg = string.Format("js exception : {0}\n {1}", ex.Message, ex.StackTrace);
                    Debug.LogError( msg);
                }
            }
        }
    }
}


