import { asyncComponent } from '@utils/asyncComponent';
import { RouteConfig } from 'react-router-config';

const Check = asyncComponent(import("@shared/App"));
const inventoryRoutes: RouteConfig[] | undefined = [
    {   
        path: '/check',
        component: Check,
    }
];

export default inventoryRoutes;