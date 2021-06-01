import {GT,UnityEngine} from 'csharp';
import { GTIUpdate } from './GTIUpdate';
import {GTUpdateManager } from './GTUpdateManager';

export class GTJSMonoBase implements GTIUpdate
{
    gameObject : UnityEngine.GameObject;
    monoBehaviour : GT.GTJSBehaviour
    index: number;
    isUpdateOpen : boolean = false;
    
    constructor(bindTo:GT.GTJSBehaviour) 
    {
        this.gameObject = bindTo.gameObject;
        this.monoBehaviour = bindTo;
        this.monoBehaviour.JsOnDestroy = () => this.OnDestroy();
        this.monoBehaviour.JsAwake = () => this.OnAwake();
        this.monoBehaviour.JsStart = () =>this.OnStart();
    }

    OnUpdate() {
      
    }
    
    getUpdateIsOpen():boolean
    {
      return false;
    }

    OnAwake()
    {
      console.error("GTJSMonoBase  Awake");
       if(this.getUpdateIsOpen()){
          let manager= GTUpdateManager.Instance<GTUpdateManager>(GTUpdateManager);
          manager.AddUpdate(this);
       }
    }

    OnStart()
    {
      console.error("GTJSMonoBase  OnStart");
    }
    
    OnDestroy() 
    {
      if(this.getUpdateIsOpen()){
        let manager= GTUpdateManager.Instance<GTUpdateManager>(GTUpdateManager);
        manager.RemoveUpdate(this);
     }
    }
}
