import { componentModel } from '@utils/componentExt/componentModel';
import { observable, action, runInAction, computed } from 'mobx';
import { ILoginParams, login, ILoginReturn } from '@services/api/auth/login';


export class LoginFormModel extends componentModel {
    @observable private auth: ILoginReturn = null;
    constructor() {
        super()
    }
    @action
    public login = async (employeeNum: string, pwd: string, captcha?: string) => {
        const params: ILoginParams = {
            employeeNum: employeeNum,
            pwd: pwd,
            // captcha: this.isCaptcha(captcha) ? captcha : ''
        };
        try {
            const data = await login(params);
            runInAction(() => {
                console.log(this.auth);
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
    private isCaptcha(val: string): boolean {
        return /^[A-za-z0-9]{4}$/.test(val)
    }


}