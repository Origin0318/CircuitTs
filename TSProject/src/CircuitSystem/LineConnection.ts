import  {ElectricalBase,ElectricalPos} from './ElectricalBase';
export class LineConnection 
 { 
    private static index:number = 10;
    private static NodeStr:string = "Node_";
    private id:number;
    public blackPos:ElectricalPos|null;//负极
    public redPos:ElectricalPos|null;//正极

    public isConnected = true;

    constructor() { 
        this.id = LineConnection.index++;
        this.blackPos = null;
        this.redPos = null;
    };

    /**
     *红色接头连接
     *
     * @param {ElectricalPos} pos:器材接头
     * @memberof LineConnection
     */
    public ConnectBlackPos(pos:ElectricalPos){
        this.Connect(false,pos);
    }
    /**
     *黑色接头连接
     *
     * @param {ElectricalPos} pos:器材接头
     * @memberof LineConnection
     */
    public ConnectRedPos(pos:ElectricalPos){
        this.Connect(true,pos);
    }


    /**
     *黑色接头断开连接
     *
     * @param {ElectricalPos}  pos:器材接头
     * @memberof LineConnection
     */
    public DisconnectBlackPos(pos:ElectricalPos){
        this.Connect(false,null);
    }

    /**
     *红色接头断开连接
     *
     * @param {ElectricalPos}  pos:器材接头
     * @memberof LineConnection
     */
    public DisconnectRedPos(pos:ElectricalPos){
        this.Connect(true,null);
    }

    /**
     *导线连接
     *
     * @param {boolean} isRed：是否为红色接头 
     * @param {(ElectricalPos | null)} pos：连接的器材的点
     * @memberof LineConnection
     */
    public Connect(isRed:boolean,pos:ElectricalPos | null):void{
        if(isRed){
            this.redPos = pos;
        }
        else{
            this.blackPos = pos;
        }
    }


    /**
     *获取连接此导线的节点的名字
     *如果有以Node_开头的节点，这名该节点已经被命名过直接返回
     *否则返回Node_加Id
     * @return {*}  {string} 节点名字
     * @memberof LineConnection
     */
    public GetNodeName():string{

        if(this.redPos!= null && this.redPos.name.startsWith(LineConnection.NodeStr)){
            return this.redPos.name;
        }

        if(this.blackPos!= null && this.blackPos.name.startsWith(LineConnection.NodeStr)){
            return this.blackPos.name;
        }

        return "Node_" + this.id;
    }

    //重置节点名字
    public ReNamePosName():void{
        if(this.redPos != null){
            if(!this.redPos.name.startsWith(LineConnection.NodeStr)){
                this.redPos.name = this.GetNodeName();
            }
        }

        if(this.blackPos != null){
            if(!this.blackPos.name.startsWith(LineConnection.NodeStr)){
                this.blackPos.name = this.GetNodeName();
            }
        }
    }
 }