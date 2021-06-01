import  {CircuitSystem} from './CircuitSystem';
import  {Voltmeter} from './Voltmeter';
import  {Resistor} from './Resistor';

/*
let circuitSystem = new CircuitSystem();
circuitSystem.AddComponent(new CircuitComponent(ComponentType.Resistor,"0","1",4));
circuitSystem.AddComponent(new CircuitComponent(ComponentType.Resistor,"1","7",2));
circuitSystem.AddComponent(new CircuitComponent(ComponentType.Voltage,"7","0",3));
circuitSystem.PrintNodes();

console.log("hello");

console.log(circuitSystem.Zero(4,5));


let [A,b] = circuitSystem.CalculateMatrices();
console.log(A);
console.log(b);

let re = circuitSystem.SolveSystem(A,b);
console.log(re);
*/
export class Test{
    static StartTest():void{
        let cSystem = new CircuitSystem();
        let v:Voltmeter = new Voltmeter(3);
        let r1:Resistor = new Resistor(2);
        let r2:Resistor = new Resistor(4);
        cSystem.Add(v);
        cSystem.Add(r1);
        cSystem.Add(r2);
        
        let line1 = cSystem.CreateLine();
        line1.ConnectBlackPos(v.blackPos);
        line1.ConnectRedPos(r1.blackPos);
        
        let line2 = cSystem.CreateLine();
        line2.ConnectBlackPos(v.redPos);
        line2.ConnectRedPos(r2.redPos);
        
        let line3 = cSystem.CreateLine();
        line3.ConnectBlackPos(r2.redPos);
        line3.ConnectRedPos(r1.redPos);
        
        cSystem.Solve();
    }
}
