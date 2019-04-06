import * as React from 'react'
import { hot } from "react-hot-loader";
import { ComponentExt } from '@utils/componentExt/componentExt';
import { Layout } from 'antd';
import LoginForm from "./LoginForm/LoginForm";
import style from '@styles/app.scss'
const { Content, Footer } = Layout;


@hot(module)
export default class LogIn<T> extends ComponentExt<T> {
  render(){
    return (
      <Layout>
        <Content style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h1 >用户登录</h1>
          <LoginForm />
        </Content>
        <Footer className={style.appFooter}>
          CSMS ©2019 Created by Student YuanQinglong
        </Footer>
      </Layout>
    );
  }
}
