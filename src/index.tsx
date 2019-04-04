import * as React from "react"
import * as ReactDOM from "react-dom"
import {Provider} from 'mobx-react'
import * as store from './store'
import App from "@shared/App";
import { AppContainer} from 'react-hot-loader';
import { HashRouter, Route, Router, BrowserRouter } from 'react-router-dom';
import { configure } from 'mobx';
import rootRoute from "routers";
import { renderRoutes } from 'react-router-config';

configure({ enforceActions: 'observed' });
const render = (Component?: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider {...store}>
        <HashRouter>
          {/* <Component/> */}
          {renderRoutes(rootRoute)}
        </HashRouter>
      </Provider>
    </AppContainer>,
    document.querySelector("#app")
  );
}
render();
