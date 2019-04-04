import { observable, action, runInAction, computed, configure} from 'mobx'
import { auth } from 'services/api';
import { authInfor, ILoginParams } from '@services/api/auth';
// 启用严格模式
configure({
    enforceActions: 'observed'
})




export class GlobalStore  {
  @observable public auth: any = null;
  
  @action
  public setAuth(val: any){
    this.auth = val;
  }
}

