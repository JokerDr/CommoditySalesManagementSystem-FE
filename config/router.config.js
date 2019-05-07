import rPurchase from './routerConf/menu/rPurchase';
import rSale from './routerConf/menu/rSale';
import rProfit from './routerConf/menu/rProfit';
import rPersonnel from './routerConf/menu/rPersonnel';
import rStatistics from './routerConf/menu/rStatistics';
import rInventory from './routerConf/menu/rInventory';
import rHelp from './routerConf/menu/rHelp';
import rUser from './routerConf/user/rUser';
import rException from './routerConf/exception/rException';
import rAccount from './routerConf/account/rAccount';

// const powers = localStorage.getItem('userPower');
// const powersMap = key => {
//   return powers[key] ? ['admin', 'user'] : [];
// };

export default [
  rUser,
  rException,
  {
    path: '/',
    component: '../layouts/BasicLayout/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/purchase/supply', authority: ['admin', 'user'] },
      rPurchase,
      rSale,
      rProfit,
      rPersonnel,
      rStatistics,
      rInventory,
      rAccount,
      rHelp,
      {
        component: '404',
      },
    ],
  },
];
