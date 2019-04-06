import * as React from "react";
import { ComponentExt } from '@utils/componentExt/componentExt'
import { Layout, Menu, Icon } from 'antd';
import { renderRoutes } from 'react-router-config';
import style  from '@styles/app.scss'
const { Content, Footer } = Layout;

interface IAppContent {
    RoutesConf: any
}

export class AppContent<T> extends ComponentExt<T,IAppContent> {
    protected EContent: any = null;
    constructor(param?: any){
      super(param);
      this.EContent = this.props.RoutesConf
    }
    render(): React.ReactNode {
      return (
      <Layout>
        <Content
          className={style.appContent}
        >
          {renderRoutes(this.EContent)}
        </Content>
        <Footer className={style.appFooter}>
            CSMS ©2019 Created by Student YuanQinglong
        </Footer>
      </Layout>
      );
    }
}