import http from '@services/http'

export interface ILoginParams {
  employeeNum: string
  pwd: string
  captcha: string
}


export interface ILoginReturn {

}

export function login(params: ILoginParams): Promise<ILoginReturn> {
  return http.post('', Object.assign({}, params))
}
