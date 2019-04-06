import { RouteConfig } from "react-router-config";
import { exact } from 'prop-types';
import { asyncComponent } from '@utils/asyncComponent';

const Home = asyncComponent(import("@views/Home/Home"));
const Login = asyncComponent(import("@components/Login"))

export const appRouterCongfig: RouteConfig[] | undefined = [
  {
    path: '/',
    component: Home,
    exact: true
  },{
    path: '/login',
    component: Login
  }
]
// const appRouterCongfig: RouteConfig[] | undefined = ()=>{
//   return getEKV(EAppRouterMap).map((elem: any) => ({
//     path: elem.key,
//     component: elem.val,
//     exact: true
//   }))
// }