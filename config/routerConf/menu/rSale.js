export default {
  path: '/sale',
  name: 'sale',
  icon: 'dashboard',
  routes: [
    {
      // 销售进货
      path: '/sale/supply',
      name: 'supply',
      component: './Sale/Supply/Supply',
    },
    {
      // 销售出货
      path: '/sale/shipment',
      name: 'shipment',
      component: './Sale/Shipment/Shipment',
    },
  ],
};
