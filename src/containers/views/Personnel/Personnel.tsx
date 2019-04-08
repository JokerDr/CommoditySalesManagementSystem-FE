import React from "react";
import { PageTemplate, IPageTemplate } from "@shared/PageTemplate";
import { ComponentExt } from '@utils/componentExt/componentExt';
import { EMenu } from '@utils/ENUM'
import { PersonnelModel } from "./PersonnelModel";
import personnelRoutes from '@routers/app/personnel';


const { EPersonnelMenu } = EMenu

export default class Purchase<T extends PersonnelModel> extends ComponentExt<T> {
    public pageParams: IPageTemplate = {
        siderParams: {
            ESider: EPersonnelMenu
        },
        contentParams: {
            RoutesConf: personnelRoutes
        }
    };

    render(): React.ReactNode {
        return <PageTemplate {...this.pageParams} />;
    }
}