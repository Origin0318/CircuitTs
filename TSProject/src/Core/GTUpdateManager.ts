import { Singleton } from './Singleton';
import { GTIUpdate } from './GTIUpdate';


export class GTUpdateManager extends Singleton<GTUpdateManager>
{
    index:number;
    updates: Map<number,GTIUpdate> = new Map<number,GTIUpdate>();
    removeUpdates: number[] = [];

    //添加元素
    public AddUpdate(update:GTIUpdate){
        this.index += 1;
        update.index = this.index;
        this.updates.set(update.index,update);
    }

    public RemoveUpdate(update:GTIUpdate){
        if(this.updates.has(update.index)){
            this.removeUpdates.push(update.index);
        }
    }

    public Update()
    {
        if(this.removeUpdates.length > 0){
            this.removeUpdates.forEach(index => {
                if(this.updates.has(index)){
                    this.updates.delete(index);
                }
            });
    
            this.removeUpdates.length = 0;
        }
        
      //  console.log('GTUpdateManager onUpdate...' + this.updates.size);
        this.updates.forEach((value, key) => { value.OnUpdate(); })
    }
}
