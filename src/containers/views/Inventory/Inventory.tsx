import { PageTemplate, IPageTemplate } from "@shared/PageTemplate";
import { ComponentExt } from '@utils/componentExt/componentExt';
import { InventoryModel } from './InventoryModel';
import {EMenu} from '@utils/ENUM'
import inventoryRoutes from '@routers/app/inventory';
import React from 'react';

const {EInventoryMenu} = EMenu


export default class Inventory<T extends InventoryModel> extends ComponentExt<T>{

    public pageParams: IPageTemplate = {
        siderParams: {
            ESider: EInventoryMenu
        },
        contentParams: {
            RoutesConf: inventoryRoutes
        }
    }
    render(): React.ReactNode {
        return (
            <PageTemplate {...this.pageParams}/>
        )
    }
}