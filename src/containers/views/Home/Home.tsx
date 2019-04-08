import  * as React from 'react'
import { HomeModel } from './homeModel';
import { SiderMenu as Sider } from "@shared/PageTemplate/SiderMenu";
import { ComponentExt } from '@utils/componentExt/componentExt';
import { Layout } from "antd";
import { hot } from 'react-hot-loader';
import { EMenu } from '@utils/ENUM';
import { AppContent } from '@shared/PageTemplate/Content';
import homeSiderRoutes from '@routers/app/home/siderRoutes';
import { IPageTemplate, PageTemplate } from '@shared/PageTemplate';

const { EHomeMenu } = EMenu;


export default class Home <T extends HomeModel > extends ComponentExt<T> {
  public pageParams: IPageTemplate = {
    siderParams: {
      ESider: EHomeMenu
    },
    contentParams: {
      RoutesConf: homeSiderRoutes
    }
  }
  render():React.ReactNode {
    return (<PageTemplate  {...this.pageParams}/>)
  }
}

// @hot(module)
// export default class Home<T extends HomeModel> extends ComponentExt<T> {
//   private siderParams: any = {
//     ESider: EHomeSider.EhomeSiderMap
//   };
//   private routes = {
//       RoutesConf: homeSiderRoutes
//   };
//   render() {
//     console.log(1);
//     return (
//       <Layout>
//         <Sider {...this.siderParams} />
//         <AppContent {...this.routes} />
//       </Layout>
//     );
//   }
// }

