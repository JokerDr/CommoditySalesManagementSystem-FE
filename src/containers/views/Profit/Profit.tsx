import {PageTemplate, IPageTemplate } from "@shared/PageTemplate";
import { ComponentExt } from '@utils/componentExt/componentExt';
import {EMenu} from '@utils/ENUM'
import { ProfitModel } from './ProfitModel';
import profitRoutes from '@routers/app/profit';
import React from 'react';

const {EProfitMenu} = EMenu


export default class Profit<T extends ProfitModel> extends ComponentExt<T> {
  public pageParams: IPageTemplate = {
    siderParams: {
      ESider: EProfitMenu
    },
    contentParams: {
      RoutesConf: profitRoutes
    }
  };

  render(): React.ReactNode {
    return <PageTemplate {...this.pageParams} />;
  }
}