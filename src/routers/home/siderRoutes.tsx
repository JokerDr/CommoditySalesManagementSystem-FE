import { asyncComponent } from '@utils/asyncComponent';
import { RouteConfig } from 'react-router-config';

const App = asyncComponent(import("@shared/App"));
const homeSiderRoutes: RouteConfig[] | undefined = [
    {   
        path: '/test',
        component: App,
    }
];

export default homeSiderRoutes;