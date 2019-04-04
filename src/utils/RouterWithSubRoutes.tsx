
import React from 'react';
import { Route } from 'react-router-dom'

export const RouterWithSubRoutes = (route: any) => (
    <Route path={route.path} render={(props: any) => (
        <route.component {...props} routes={route.routes} />
    )} />)