import  * as React from 'react'
import { HomeModel } from './homeModel';
import { SiderMenu as Sider } from "@shared/SiderMenu";
import { ComponentExt } from '@utils/componentExt/componentExt';
import { Layout } from "antd";
import { hot } from 'react-hot-loader';
import { EHomeSider } from '@utils/ENUM';
import { AppContent } from '@shared/Content';
import homeSiderRoutes from '@routers/app/home/siderRoutes';


@hot(module)
export default class Home<T extends HomeModel> extends ComponentExt<T> {
  private siderParams: any = {
    ESider: EHomeSider.EhomeSiderMap
  };
  private routes = {
      RoutesConf: homeSiderRoutes
  };
  render() {
    console.log(1);
    return (
      <Layout>
        <Sider {...this.siderParams} />
        <AppContent {...this.routes} />
      </Layout>
    );
  }
}

