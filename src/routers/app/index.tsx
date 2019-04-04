import { RouteConfig } from "react-router-config";
import { exact } from 'prop-types';
import { asyncComponent } from '@utils/asyncComponent';
import { getEKV } from '@utils/ENUM';
import { EAppRouterMap } from '@utils/ENUM/eRootMap';
const Home = asyncComponent(import("@views/Home/Home"));


export const appRouterCongfig: RouteConfig[] | undefined = [
  {
    path: '/',
    component: Home,
    exact: true
  }
]
// const appRouterCongfig: RouteConfig[] | undefined = ()=>{
//   return getEKV(EAppRouterMap).map((elem: any) => ({
//     path: elem.key,
//     component: elem.val,
//     exact: true
//   }))
// }