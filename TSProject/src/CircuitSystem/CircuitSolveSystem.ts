import  LinearSolve from './linear.js';
import  {CircuitComponent,ComponentType} from './CircuitComponent';

export class  NodeHashtable{
    nodes: Map<string,number> = new Map<string,number>();
    nodeCount:number = 0;

    constructor() { 
    };

    addToNodes(node_str:string):number{
        if(!this.nodes.has(node_str)){
            this.nodes.set(node_str,this.nodeCount);
            this.nodeCount ++;
        }
         
        let ret = this.nodes.get(node_str);
        if(ret == undefined) return -1;
        return ret;
    }

    public Clean():void{
        this.nodes.clear();
        this.nodeCount = 0;
    }
        
}

export class CircuitSolveSystem{
    voltageCount:number = 0;
    currentCount:number = 0;
    resistorCount:number = 0;

    hashTable : NodeHashtable ;
    lstComponents : CircuitComponent[];
    constructor() { 
        this.hashTable = new NodeHashtable();
        this.hashTable.addToNodes('Node_0');
        this.lstComponents = [];
    };

    public Clean():void{
        this.hashTable.Clean();
        this.hashTable.addToNodes('Node_0');
        this.lstComponents = [];
    }

    public InitComponents(components : CircuitComponent[]) : void{
        components.forEach(component => {
            this.AddComponent(component);
        });
    }

    PrintNodes():void{
        console.log("Circuit Info")
        console.log("Component count: ", this.lstComponents.length)
        console.log("Voltage count: ", this.voltageCount)
        console.log("Current count: ", this.currentCount)
        console.log("Resistance count: ", this.resistorCount)
        console.log("Node count: ", this.hashTable.nodeCount)

        console.log("\nNodes are mapped as following:");
        this.hashTable.nodes.forEach((key,val) => {
            console.log("\"" + key + "\" :", val);
        });

        console.log("\nCircuit Components:")
        this.lstComponents.forEach(component => {
            component.PrintSelf();
        });
    }

    public AddComponent(component:CircuitComponent) : void{
        if(component.comp_type == ComponentType.Current){
            this.currentCount++;
        }
        else if(component.comp_type == ComponentType.Resistor){
            this.resistorCount++;
        }
        else if(component.comp_type == ComponentType.Voltage){
            this.voltageCount++;
        }

        component.high = this.hashTable.addToNodes(component.high_node)
        component.low = this.hashTable.addToNodes(component.low_node)

        this.lstComponents.push(component);
        
    }

    public CalculateMatrices():[number[][],number[]]{

        let voltageCount = this.voltageCount;
        let inductorCount = 0;
        let nodeCount = this.hashTable.nodeCount;
    
        // calculate g2 components
        let g2Count = voltageCount + inductorCount
        console.log("Group 2 count:"+g2Count)
    
        // calculate matrix size
        let matrixSize = nodeCount + g2Count - 1
        console.log("Matrix size:", matrixSize, "\n")
    
        // define Matrices
        let A = this.Zero(matrixSize, matrixSize)
        let b = this.ZeroArray(matrixSize)
    
        // Group 2 component index
        let g2Index = matrixSize - g2Count
    
        // loop through all components
        this.lstComponents.forEach(component=>{
            // store component info in temporary variable
            let high = component.high
            let low = component.low
            let value = component.value
    
            if (component.comp_type == ComponentType.Resistor){
                // affects G-matrix of A
                // diagonal self-conductance of node
                if (high != 0){
                    A[high - 1][high - 1] = A[high - 1][high - 1] + 1/value
                }
                    
                if (low != 0){
                    A[low - 1][low - 1] = A[low - 1][low - 1] + 1/value
                }
                
                if( high != 0 && low != 0){
                    A[high - 1][low - 1] = A[high - 1][low - 1] - 1/value
                    A[low - 1][high - 1] = A[low - 1][high - 1] - 1/value
                }      
            }
               
            else if(component.comp_type == ComponentType.Voltage){
                // affects the B and C matrices of A
                if (high != 0){
                    A[high - 1][g2Index] = A[high - 1][g2Index] + 1
                    A[g2Index][high - 1] = A[g2Index][high - 1] + 1
                }
                   
                if (low != 0){
                    A[low - 1][g2Index] = A[low - 1][g2Index] - 1
                    A[g2Index][low - 1] = A[g2Index][low - 1] - 1
                }
                    
                // affects b-matrix
                b[g2Index] = value
    
                // increase G2 counter
                g2Index = g2Index + 1
            }

            else if(component.comp_type == ComponentType.Current){
                 // affects b-matrix
                 if (high != 0){
                    b[high - 1] = b[high - 1] - value
                 }
                 if (low != 0){
                    b[low - 1] = b[low - 1] + value
                 }
                 
                
            }
        })
            
        return [A,b]
    }

    public SolveSystem(A:number[][], b:number[]):number[]{
        let x = LinearSolve(A, b)
        return x
    }
   

    public Zero(row:number,col:number) : number[][]{
        let ret : number[][] = [];
        let i = 0;
        let j = 0;
        for(i = 0;i < row;i++){
            ret[i] = [];
            for(j = 0;j < col;j++){
                ret[i][j] = 0;
            }
        }
        return ret;
    }

    public ZeroArray(col:number) : number[]{
        let ret: number[] = [];
        let i : number = 0;
        for(i = 0;i < col;i++){
            ret[i] = 0;
        }
        return ret;
    }
}


