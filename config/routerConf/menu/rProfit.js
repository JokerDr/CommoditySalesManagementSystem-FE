export default {
  path: '/profit',
  name: 'profit',
  icon: 'dashboard',
  routes: [
    {
      // 商品利润
      path: '/profit/commodityProfit',
      name: 'commodityProfit',
      component: './Profit/CommodityProfit/CommodityProfit',
    },
    // {
    //   // 客户利润
    //   path: '/profit/customerProfit',
    //   name: 'customerProfit',
    //   component: './Profit/CustomerProfit/CustomerProfit',
    // },
    {
      // 员工销售成绩
      path: '/profit/eePerformance',
      name: 'eePerformance',
      component: './Profit/EePerformance/EePerformance',
    },
    // {
    //   // 员工提成
    //   path: '/profit/eeCommission',
    //   name: 'eeCommission',
    //   component: './Profit/EeCommission/EeCommission',
    // },
  ],
};
