import { ComponentExt } from "@utils/componentExt/componentExt";
import Form, { FormComponentProps } from 'antd/lib/form';
import React, { ReactNode } from 'react';
import { Input, Checkbox, Button, Icon, message } from 'antd';
import { LoginFormModel } from './LoginFormModel';
import { observer, inject } from 'mobx-react';
import { hot } from 'react-hot-loader';
import style from '@styles/logIn.scss';
import { ILoginParams } from '@services/api/auth/login';

interface IUserFormProps extends FormComponentProps {
  globalStore?: IGlobalStore.GlobalStore
  routerStore?: IRouterStore.RouterStore
}


@hot(module)
@inject("globalStore", "routerStore")
@observer
class LoginForm<T extends LoginFormModel> extends ComponentExt<T, IUserFormProps> {

  /**
   * name
   */
  public toRegister() {
    this
    this.props.routerStore.push('/register');
  }

  /**
   * toforgotPassword
   */
  public toforgotPassword() {
    this.props.routerStore.push("/forgotPassword");
  }

  public handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, val: ILoginParams) => {
      if (!err) {
        console.log(this.model, this);
        this.model.login(val.employeeNum, val.pwd).then((elem)=>{
          debugger;
          const auth = this.model.Auth;
          if(auth !== null) {
            this.props.globalStore.setAuth(auth)
              .then(()=>{
                this.success();
              }).catch((err) => {
                throw new Error(err);
              });
            
          }
        })
      }
    });
  }
  /**
   * name
   */
  public success() {
    message.success("This is a message of success");
  }

  render(): ReactNode {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={style.loginForm}>
        <Form.Item>
          {
            getFieldDecorator('userName', {
              rules: [{
                required: true,
                message: 'Please input your username!'
              }],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('password', {
              rules: [{
                required: true,
                message: 'Please input your Password!'
              }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )       
          }
            <a className={style.loginFormForgot} href="javascript:void(0)" onClick={()=>this.toforgotPassword()}>Forgot password</a>
            <Button type="primary" htmlType="submit" className={style.loginFormButton}>
              Log in
            </Button>
              Or <a href="javascript:void(0)" onClick={()=>this.toRegister()}>register now!</a>
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create<IUserFormProps>({})(LoginForm);
