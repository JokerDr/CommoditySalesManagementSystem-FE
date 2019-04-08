import { asyncComponent } from '@utils/asyncComponent';
import { RouteConfig } from 'react-router-config';

const CommodityProfit = asyncComponent(import("@shared/App"));
const CustomerProfit = asyncComponent(import("@shared/App"));
const EePerformance = asyncComponent(import("@shared/App"));
const EeCommission = asyncComponent(import("@shared/App"));

const profitRoutes: RouteConfig[] | undefined = [
    {   
        path: '/commodityProfit',
        component: CommodityProfit,
    },{   
        path: '/customerProfit',
        component: CustomerProfit,
    },{   
        path: '/eePerformance',
        component: EePerformance,
    },{   
        path: '/eeCommission',
        component: EeCommission,
    }
];

export default profitRoutes;