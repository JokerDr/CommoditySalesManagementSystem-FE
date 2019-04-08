import React from "react";
// import { PageTemplate, IPageTemplate } from "@shared/PageTemplate"
import { ComponentExt } from '@utils/componentExt/componentExt';
import { EMenu } from '@utils/ENUM'
import { HelpModel } from './HelpModel';


// const { EHelp } = EMenu

export default class Help<T extends HelpModel> extends ComponentExt<T> {
    // public pageParams: IPageTemplate = {
    //     siderParams: {
    //         ESider: 
    //     },
    //     contentParams: {
    //         RoutesConf: purchaseRoutes
    //     }
    // };

    render(): React.ReactNode {
        return (
            <div>nothing for helping</div>
            );
    }
}