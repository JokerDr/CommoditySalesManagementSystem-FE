import { RouteConfig } from "react-router-config";
import { asyncComponent } from '@utils/asyncComponent';
import Register from '@components/Register';

const Home = asyncComponent(import("@views/Home/Home"));
const Purchase = asyncComponent(import("@views/Purchase/Purchase"));
const Sale = asyncComponent(import("@views/Sale/Sale"));
const Inventory = asyncComponent(import("@views/Inventory/Inventory"));
const Profit = asyncComponent(import("@views/Profit/Profit"));
const Personnel = asyncComponent(import("@views/Personnel/Personnel"));
const Help = asyncComponent(import("@views/Help/Help"));
const Login = asyncComponent(import("@components/Login"))

export const appRouterCongfig: RouteConfig[] | undefined = [
  {
    path: '/',
    component: Purchase,
    exact: true
  },{
    path: '/purchase',
    component: Purchase,
  },{
    path: '/sale',
    component: Sale,
  },{
    path: '/inventory',
    component: Inventory,
  },{
    path: '/profit',
    component: Profit,
  },{
    path: '/personnel',
    component: Personnel,
  },{
    path: '/help',
    component: Help,
  },{ 
    path: '/login',
    component: Login
  },{
    path: '/register',
    component: Register
  }
]

// const appRouterCongfig: RouteConfig[] | undefined = (EParam: any ,options?: {path: string, [name: string]: any}[])=>{
//   // const res = options !== undefined 

//   return getEKV(EParam).map((item: any) => {
//     return Object.assign({
//       path: item.key,
//       component: item.val,
//     }, options === undefined
//       ? null
//       :  )
//   })
// }