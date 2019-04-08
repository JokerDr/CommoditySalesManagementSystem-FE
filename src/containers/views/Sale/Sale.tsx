import { PageTemplate, IPageTemplate } from "@shared/PageTemplate";
import { ComponentExt } from '@utils/componentExt/componentExt';
import {EMenu} from '@utils/ENUM'
import { SaleModel } from './SaleModel';
import saleRoutes from '@routers/app/sale';
import React from 'react';

const {ESaleMenu} = EMenu

export default class Sale<T extends SaleModel> extends ComponentExt<T>{
    public pageParams: IPageTemplate = {
        siderParams: {
            ESider: ESaleMenu
        },
        contentParams: {
            RoutesConf: saleRoutes
        }
    }

    render(): React.ReactNode {
        return (
            <PageTemplate {...this.pageParams}/>
        )
    }
}