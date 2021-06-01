export enum ComponentType {
    None,
    Voltage = 1,
    Current,
    Resistor,
  }

  //https://www.circuitlab.com/editor/#
export class CircuitComponent
 { 
    private static index:number = 0
    id : number
    comp_type:ComponentType
    high_node:string
    low_node:string
    value:number
    high : number
    low : number

    
    // 构造函数 
    constructor(type:ComponentType,high:string,low:string,v:number) { 
        this.id = CircuitComponent.index++;
        this.comp_type = type ;
        this.high_node = high;
        this.low_node = low;
        this.value = v;
        this.high = -1;
        this.low = -1;
    };

    SetTargetPos(pos:string,isHigh:boolean):void{
        if(isHigh){
            this.high_node = pos;
        }
        else{
            this.low_node = pos;
        }
    }

    SetValue(v:number):void{
        //电阻不允许设置为0
        if(this.comp_type == ComponentType.Resistor && v == 0){
            this.value = 0.0001;
        }
        else{
            this.value = v;
        }
        
    }
 
    PrintSelf():void{
        let str =  this.id + " " + (this.comp_type) + " " + (this.high_node) + " "
        + (this.low_node) + " " + (this.value)
        console.log(str);
    }
}



