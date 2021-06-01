import {GT,UnityEngine} from 'csharp';
import { GTIUpdate } from './GTIUpdate';
import { Singleton } from './Singleton';
import { GTJSMonoBase } from './GTJSMonoBase';
import { GTJSMonoBehaviour } from './GTJSMonoBehaviour';

export class GTJSMonoManager extends Singleton<GTJSMonoManager> 
{
    public CreateJSMonoBehaviour(mono:GT.GTJSBehaviour,moudle:string) : GTJSMonoBase{
      let jsMono = new GTJSMonoBehaviour(mono);
      return jsMono;
    }
}
