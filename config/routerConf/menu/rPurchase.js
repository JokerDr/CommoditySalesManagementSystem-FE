export default {
  path: '/purchase',
  name: 'purchase',
  icon: 'dashboard',
  routes: [
    {
      // 采购进货
      path: '/purchase/supply',
      name: 'supply',
      component: './Purchase/Supply/Supply',
    },
    {
      // 采购出货
      path: '/purchase/shipment',
      name: 'shipment',
      component: './Purchase/Shipment/Shipment',
    },
  ],
};
