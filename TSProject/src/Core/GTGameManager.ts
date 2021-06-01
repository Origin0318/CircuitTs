import { Singleton } from './Singleton';
import {GT,UnityEngine} from 'csharp'
import {GTUpdateManager} from './GTUpdateManager'
import {GTJSMonoManager} from './GTJSMonoManager'

export class GTGameManager extends Singleton<GTGameManager>
{
    updateManager:GTUpdateManager;
    onInit(bindTo : GT.GTJSManager) 
    {
        this.updateManager = GTUpdateManager.Instance<GTUpdateManager>(GTUpdateManager);
        GT.GTPuertsAdaptor.OnCreateMonoTs = (mono,moduleName) => this.CreateJSMonoBehaviour(mono,moduleName);
        bindTo.JsUpdate = () => this.onUpdate();
        bindTo.JsOnApplicationQuit = () => this.onApplicationQuit();
    }

    CreateJSMonoBehaviour(mono:GT.GTJSBehaviour,moduleName:string): void {
        GTJSMonoManager.Instance<GTJSMonoManager>(GTJSMonoManager).CreateJSMonoBehaviour(mono,moduleName);
    }


    onUpdate() {
        //js不支持操作符重载所以Vector3的乘这()么用
        //console.log('GTGameManager onUpdate...');
        this.updateManager.Update();
    }
    
    onApplicationQuit() {
        console.log('OnApplicationQuit...');
    }
}