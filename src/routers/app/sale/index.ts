import { asyncComponent } from '@utils/asyncComponent';
import { RouteConfig } from 'react-router-config';

const SaleSupply = asyncComponent(import("@shared/App"));
const SaleShipment = asyncComponent(import("@shared/App"));

const saleRoutes: RouteConfig[] | undefined = [
    {   
        path: '/saleSupply',
        component: SaleSupply,
    }, {
        path: '/saleShipment',
        component: SaleShipment,
    },
];

export default saleRoutes;