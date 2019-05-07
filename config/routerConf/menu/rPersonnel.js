export default {
  path: '/personnel',
  name: 'personnel',
  icon: 'dashboard',
  routes: [
    {
      // 员工管理
      path: '/personnel/eeManagement',
      name: 'eeManagement',
      component: './Personnel/EeManagement/EeManagement',
    },
    {
      // 客户管理
      path: '/personnel/customerManagement',
      name: 'customerManagement',
      component: './Personnel/CustomerManagement/CustomerManagement',
    },
    {
      // 供货商管理
      path: '/personnel/supplierManagement',
      name: 'supplierManagement',
      component: './Personnel/SupplierManagement/SupplierManagement',
    },
    {
      // 来往单位管理
      path: '/personnel/enterpriseManagement',
      name: 'enterpriseManagement',
      component: './Personnel/EnterpriseManagement/EnterpriseManagement',
    },
  ],
};
