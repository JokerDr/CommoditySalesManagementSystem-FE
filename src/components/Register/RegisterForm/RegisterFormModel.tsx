import { componentModel } from '@utils/componentExt/componentModel';
import { observable, action, runInAction, computed } from 'mobx';
import { IRegisterParams, IRegisterReturn, register } from '@services/api/auth/register';

export class RegisterFormModel  extends componentModel {
  @observable public registerStatus: boolean = false ;
  @observable public employeeNum: string = '' ;
  @observable public employeeName: string = '' ;
  @observable public phone: number = null ;
  @observable public birthDate: number = null ;
  @observable public sex: string = '' ;
  @observable public pwd: string = '' ;
  
  @action
  /**
   * register
   */
  public register = async (p: IRegisterParams) => {
      try {
        const params: IRegisterParams = {
            employeeNum: this.employeeNum,
            employeeName: this.employeeName,
            phone: this.phone,
            birthDate: this.birthDate, // 毫秒数值
            sex: this.sex,  //male female
            pwd: this.pwd  
          } 
        const data:IRegisterReturn = await register(params);
        runInAction(()=>{
            this.registerStatus = Boolean(data.status);
        })
      } catch(err) {
        throw new Error(err)
      }
  }
}