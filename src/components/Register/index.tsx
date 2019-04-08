import * as React from 'react'
import { hot } from "react-hot-loader";
import { ComponentExt } from '@utils/componentExt/componentExt';
import { Layout } from 'antd';
import RegisterForm from './RegisterForm/RegisterForm'
import style from '@styles/app.scss'
const { Content, Footer } = Layout;


@hot(module)
export default class Register<T> extends ComponentExt<T> {
  render(){
    return (
      <Layout>
        <Content style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <RegisterForm />
        </Content>
        <Footer className={style.appFooter}>
          CSMS ©2019 Created by Student YuanQinglong
        </Footer>
      </Layout>
    );
  }
}
