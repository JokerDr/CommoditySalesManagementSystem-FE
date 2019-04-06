import { observable, action, runInAction, computed, configure} from 'mobx'
// 启用严格模式
configure({
    enforceActions: 'observed'
})




export class GlobalStore  {
  @observable public auth: any = null;
  
  @action
  public setAuth = async (val: any) =>{
    this.auth = await val;
  }
}

