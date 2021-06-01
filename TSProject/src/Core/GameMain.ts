import {GT,UnityEngine} from 'csharp'
import {GTGameManager} from './GTGameManager'
import { Test } from '../CircuitSystem/test';
function init(gtManager : GT.GTJSManager): void {
  console.log("init");
  console.log(gtManager);
  let t = GTGameManager.Instance<GTGameManager>(GTGameManager);
  t.onInit(gtManager);

  Test.StartTest();
} 
console.log("1234");
init(GT.GTJSManager.Instance);