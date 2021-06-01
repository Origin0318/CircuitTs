import {CircuitComponent, ComponentType } from './CircuitComponent';
import  {ElectricalBase} from './ElectricalBase';
import  {LineConnection} from './LineConnection';
import  {CircuitSolveSystem} from './CircuitSolveSystem';

export class CircuitSystem
{
    lst:ElectricalBase[];
    lstLines:LineConnection[] ;
    circuitSystem:CircuitSolveSystem ;

    constructor() { 
        this.lst = [];
        this.lstLines = [];
        this.circuitSystem = new CircuitSolveSystem();
    };


    public Add(elect:ElectricalBase):void {
        this.lst.push(elect);
    }

    public Remove(elect:ElectricalBase):void{
        let index = this.lst.indexOf(elect);
        if(index > -1){
            this.lst.splice(index,1);
        }
    }
    public CreateLine():LineConnection{
        let line = new LineConnection();
        this.lstLines.push(line);
        return line;
    }

    public RemoveLine(line:LineConnection):void{
        let index = this.lstLines.indexOf(line);
        if(index > -1){
            this.lstLines.splice(index,1);
        }
    }

    public Solve():void{
        let isInitPowerNode:boolean = false;
        let component:CircuitComponent[] = [];
        this.lst.forEach(electric =>{
            if(electric.circuitComponent.comp_type == ComponentType.Voltage && !isInitPowerNode){
                electric.ResetPos(true);
            }
            else{
                electric.ResetPos(false);
            }
            component.push(electric.circuitComponent);
        });

        this.lstLines.forEach(line =>{
            line.ReNamePosName();
        });

        this.lst.forEach(electric =>{
            electric.ResetCircuitComponentInfos();
        });

        this.circuitSystem.InitComponents(component);

        this.circuitSystem.PrintNodes();

        let [A,b] = this.circuitSystem.CalculateMatrices();
        console.log(A);
        console.log(b);

        let re = this.circuitSystem.SolveSystem(A,b);
        console.log(re);
    }
}