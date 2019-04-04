import * as React from "react";
import { ComponentExt } from '@utils/componentExt/componentExt'
import { Layout, Menu, Icon } from 'antd';
import { renderRoutes } from 'react-router-config';
import * as style  from '@styles/appContent.scss'
const { Content, Footer } = Layout;

interface IAppContent {
    RoutesConf: any
}

export class AppContent<T extends IAppContent> extends ComponentExt<T> {
    protected EContent: any = null;
    constructor(param?: any){
      super(param);
      this.EContent = this.props.RoutesConf;
    }
    render(): React.ReactNode {
      return (
      <Layout>
        <Content
          className={style.appContent}
        >
          {renderRoutes(this.EContent)}
        </Content>
        <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      );
    }
}