import  {ComponentType} from './CircuitComponent';
import  {ElectricalBase} from './ElectricalBase';
export class Battery extends ElectricalBase
 { 
    constructor(value : number) { 
        super(ComponentType.Voltage,value);
    };
 }