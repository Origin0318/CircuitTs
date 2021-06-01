import  {CircuitComponent,ComponentType} from './CircuitComponent';
import  {ElectricalBase} from './ElectricalBase';
export class Voltmeter extends ElectricalBase
 { 
    constructor(value : number) { 
        super(ComponentType.Voltage,value);
    };
 }