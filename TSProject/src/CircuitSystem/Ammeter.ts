import  {CircuitComponent,ComponentType} from './CircuitComponent';
import  {ElectricalBase} from './ElectricalBase';
export class Ammeter extends ElectricalBase
 { 
    constructor(value : number) { 
        super(ComponentType.Current,value);
    };
 }