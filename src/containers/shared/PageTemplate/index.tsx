import  * as React from 'react'
import { SiderMenu as Sider, ISiderMenu } from "@shared/PageTemplate/SiderMenu";
import { ComponentExt } from '@utils/componentExt/componentExt';
import { Layout } from "antd";
import { hot } from 'react-hot-loader';
import { AppContent, IAppContent } from '@shared/PageTemplate/Content';
import { observer } from 'mobx-react';

export interface IPageTemplate {
    siderParams: ISiderMenu
    contentParams: IAppContent
}

@hot(module)
@observer
export class PageTemplate<T> extends ComponentExt<T, IPageTemplate> {
  render() {
    return (
      <Layout>
        <Sider {...this.props.siderParams} />
        <AppContent {...this.props.contentParams} />
      </Layout>
    );
  }
}

