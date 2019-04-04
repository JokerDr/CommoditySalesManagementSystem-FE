import { componentModel } from '@utils/componentExt/componentModel';
import { observable, action, runInAction, computed } from 'mobx';
import { ILoginParams, authInfor, ILoginReturn } from '@services/api/auth';


export class LoginModel extends componentModel {
    @observable private auth: ILoginReturn = {};
    constructor() {
        super()
    }
    @action
    public login = async (employeeNum: string, pwd: string, code: string) => {
        const params: ILoginParams = {
            employeeNum: employeeNum,
            pwd: pwd,
            code: this.isCode(code) ? code : ''
        };
        try {
            const data = await authInfor(params);
            runInAction(() => {
                this.auth = data;
            })
        } catch (err) {
            // console.log(err);
        }
    }

    @computed
    public get Auth(): ILoginReturn {
        return this.auth;
    }

    // 验证正则 数字字母组合 长度4
    @action
    private isCode(val: string): boolean {
        return /^[A-za-z0-9]{4}$/.test(val)
    }


}