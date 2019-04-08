import React from "react";
import{ PageTemplate, IPageTemplate } from "@shared/PageTemplate";
import { ComponentExt } from '@utils/componentExt/componentExt';
import {EMenu} from '@utils/ENUM'
import { PurchaseModel } from './PurchaseModel';
import purchaseRoutes from '@routers/app/purchase';


const {EPurchaseMenu} = EMenu

export default class Purchase<T extends PurchaseModel> extends ComponentExt<T> {
  public pageParams: IPageTemplate = {
    siderParams: {
      ESider: EPurchaseMenu
    },
    contentParams: {
      RoutesConf: purchaseRoutes
    }
  };

  render(): React.ReactNode {
    return <PageTemplate {...this.pageParams} />;
  }
}