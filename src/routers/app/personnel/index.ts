import { asyncComponent } from '@utils/asyncComponent';
import { RouteConfig } from 'react-router-config';

const EeManagement = asyncComponent(import("@shared/App"));
const CustomerManagement = asyncComponent(import("@shared/App"));
const SupplierManagement = asyncComponent(import("@shared/App"));
const EnterpriseManagement = asyncComponent(import("@shared/App"));

const personnelRoutes: RouteConfig[] | undefined = [
    {   
        path: '/eeManagement',
        component: EeManagement,
    },{   
        path: '/customerManagement',
        component: CustomerManagement,
    },{   
        path: '/supplierManagement',
        component: SupplierManagement,
    },{   
        path: '/enterpriseManagement',
        component: EnterpriseManagement,
    }
];

export default personnelRoutes;