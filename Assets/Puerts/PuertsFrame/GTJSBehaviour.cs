using UnityEngine;
using Puerts;
using System;
using System.IO;

namespace GT
{
    /// <summary>
    /// 可以直接调用TS的MonoBehaviour，用来TS同步GameObject的生命周期
    /// </summary>
    public class GTJSBehaviour : MonoBehaviour
    {
        /// <summary>
        /// //可配置加载的js模块
        /// </summary>
        public string ModuleName;

        public Action JsAwake;
        public Action JsStart;
        public Action JsOnDestroy;

        void Awake()
        {
            if(GTPuertsAdaptor.OnCreateMonoTs != null)
            {
                GTPuertsAdaptor.OnCreateMonoTs(this,ModuleName);
            }
            if(JsAwake != null)
            {
                JsAwake();
            }
        }

        void Start()
        {
            if (JsStart != null) JsStart();
        }

        void OnDestroy()
        {
            if (JsOnDestroy != null) JsOnDestroy();
            JsStart = null;
            JsOnDestroy = null;
        }
    }
}