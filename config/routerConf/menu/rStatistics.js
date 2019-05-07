export default {
  path: '/statistics',
  name: 'statistics',
  icon: 'dashboard',
  routes: [
    {
      // 商品销售统计
      path: '/statistics/timeSales',
      name: 'timeSales',
      component: './Statistics/TimeSales/TimeSales',
    },
    {
      // 员工销售统计
      path: '/statistics/eeSales',
      name: 'eeSales',
      component: './Statistics/EeSales/EeSales',
    },
    // {
    //   // 客户销售统计
    //   path: '/statistics/customerSales',
    //   name: 'customerSales',
    //   component: './Statistics/CustomerSales/CustomerSales',
    // },
    // {
    //   // 客户欠款还款统计
    //   path: '/statistics/repaymentOfCustomerDebt',
    //   name: 'repaymentOfCustomerDebt',
    //   component: './Statistics/RepaymentOfCustomerDebt',
    // },
    // {
    //   // 供货商欠款还款统计
    //   path: '/statistics/repaymentOfSupplierDebt',
    //   name: 'repaymentOfSupplierDebt',
    //   component: './Statistics/RepaymentOfSupplierDebt',
    // },
  ],
};
