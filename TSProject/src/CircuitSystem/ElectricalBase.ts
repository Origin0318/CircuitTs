import  {CircuitComponent,ComponentType} from './CircuitComponent';

type Nullable<T> = T | undefined | null;

export class ElectricalPos{
    static index:number = 10;
    private id:number;
    name:string;
    private owner:ElectricalBase;
    constructor(o:ElectricalBase) { 
        this.id = ElectricalPos.index++;
        this.owner = o;
        this.name = this.id.toString();

    };

    public GetOwner():ElectricalBase{
        return this.owner;
    }

    public Reset():void{
        this.name = this.id.toString();
    }
}

export class ElectricalBase
 { 
     private static index : number = 0;
    circuitComponent : CircuitComponent;
    id:number;
    public blackPos:ElectricalPos;//黑色表示负极
    public redPos:ElectricalPos;//红色表示正极
    constructor(type:ComponentType,v:number = 1,highStr:string = "",lowStr:string = "") { 
        this.id = ElectricalBase.index++;
        this.circuitComponent = new CircuitComponent(type,"","",v);
        this.blackPos = new ElectricalPos(this);
        this.redPos = new ElectricalPos(this);
    };

    //设置高节点位
    SetHighTagPos(highStr:string) : void{
        this.circuitComponent.SetTargetPos(highStr,true);
    }

    //设置低节点位
    SetLowTagPos(str:string) : void{
        this.circuitComponent.SetTargetPos(str,false);
    }

    //设置数值
    SetValue(value:number):void{
        this.circuitComponent.SetValue(value);
    }

    //重置节点位
    ResetCircuitComponentInfos():void{
        this.SetHighTagPos(this.redPos.name);
        this.SetLowTagPos(this.blackPos.name);
    }

    //重置节点位，isZeroPos是否为0电势点即接地点。
    ResetPos(isZeroPos:boolean = false):void{
        this.blackPos.Reset();
        this.redPos.Reset();
        if(isZeroPos){
            this.blackPos.name = "Node_0"
            this.redPos.name = "Node_1"
        }
    }
 }