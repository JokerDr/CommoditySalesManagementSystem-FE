import * as React from 'react'
import { hot } from "react-hot-loader";
import { inject, observer } from "mobx-react";
import { ComponentExt } from '@utils/componentExt/componentExt';
import { LoginModel } from './LoginModel'
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';


interface IProps {
  globalStore?: IGlobalStore.GlobalStore
  routerStore?: IRouterStore.RouterStore
}


@hot(module)
@inject("globalStore", "routerStore")
@observer
export default class Login<T extends LoginModel> extends ComponentExt<IProps> {
  constructor(p: IProps) {
    super(p);
    
  }
  handleSubmit(e: React.FormEvent) {
    // this.model.login
    this.model

  }
  render(): React.ReactNode {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}