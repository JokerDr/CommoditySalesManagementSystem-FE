export default {
  path: '/inventory',
  name: 'inventory',
  icon: 'dashboard',
  routes: [
    {
      // 库存检查
      path: '/inventory/check',
      name: 'check',
      component: './Inventory/Check/Check',
    },
  ],
};
