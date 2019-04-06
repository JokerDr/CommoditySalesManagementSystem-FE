import http from '@services/http'

export interface ILoginParams {
  employeeNum: string
  pwd: string
  // code: string
}


export interface ILoginReturn {

}

export function authInfor(params: ILoginParams): Promise<ILoginReturn> {
  return http.post('', Object.assign({}, params))
}
