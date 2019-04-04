import { asyncComponent } from '@utils/asyncComponent';
import { RouteConfig } from 'react-router-config';

const App = asyncComponent(import("@shared/App")) ;
// interface RouteConfig {
//   key?: React.Key;
//   location?: Location;
//   component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType;
//   path?: string;
//   exact?: boolean;
//   strict?: boolean;
//   routes?: RouteConfig[];
// }
const rootRoute: RouteConfig[] | undefined = [
  {
    path: '/',
    component: App,
  }
];

export default rootRoute