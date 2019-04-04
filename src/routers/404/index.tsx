import React from 'react';
const pageNotFound = React.lazy(() => import("@components/404/PNF"));


export default {
    path: '404',
    getComponent(nextState: any, cb: any) {
        cb(null, pageNotFound);
    }
}