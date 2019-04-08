import http from '@services/http'

export interface IRegisterParams {
  employeeNum: string
  employeeName: string  
  email: string
  phone: number
  curtPath: string, 
  birthDate: number // 毫秒数值
  sex: string  //male female
  pwd: string  
  captcha: string
}


export interface IRegisterReturn {
    status: string  // 0: failed, 1: sucess
}

export function register(params: IRegisterParams): Promise<IRegisterReturn> {
  return http.post('', Object.assign({}, params))
}
