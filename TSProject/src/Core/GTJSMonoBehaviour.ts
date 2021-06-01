import {UnityEngine} from 'csharp'
import {GTJSMonoBase} from './GTJSMonoBase'

export class GTJSMonoBehaviour extends GTJSMonoBase
{
  constructor(bindTo:any)
  {
    super(bindTo);
  }

  getUpdateIsOpen():boolean{
      return true;
    }


  OnUpdate() 
  {
      console.log('GTJSMonoBehaviour onUpdate...');
  }
  
  onDestroy() {
      console.log('onDestroy...');
  }
}