import { asyncComponent } from '@utils/asyncComponent';
import { RouteConfig } from 'react-router-config';

const PurchaseSupply = asyncComponent(import("@shared/App"));
const PurchaseShipment = asyncComponent(import("@shared/App"));

const purchaseRoutes: RouteConfig[] | undefined = [
  {
    path: "/purchaseSupply",
    component: PurchaseSupply
  },
  {
    path: "/purchaseShipment",
    component: PurchaseShipment
  }
];

export default purchaseRoutes;