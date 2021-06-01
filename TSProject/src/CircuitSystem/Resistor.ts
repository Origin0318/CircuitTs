import  {CircuitComponent,ComponentType} from './CircuitComponent';
import  {ElectricalBase} from './ElectricalBase';
export class Resistor extends ElectricalBase
 { 
    constructor(value : number) { 
        super(ComponentType.Resistor,value);
    };
 }