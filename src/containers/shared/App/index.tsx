import * as React from 'react'
import { hot } from 'react-hot-loader';
import { observer, inject } from "mobx-react";
import * as style from "@styles/logo.scss";
import { withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { renderRoutes } from 'react-router-config';
import { appRouterCongfig } from '@routers/app';
import { getEKV, ERootMap } from "@utils/ENUM";
import Login from '@components/Login/Login';
const { Header} = Layout;

interface IProps {
  globalStore?: IGlobalStore.GlobalStore
  routerStore?: IRouterStore.RouterStore
}

@inject("globalStore", "routerStore")
@hot(module)
@observer
export class App extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  private handelClick(path: string): void {
    return this.props.routerStore.push(path)
  }
  private MenuItems(): React.ReactNode[] {
    let index = 0;
    return getEKV(ERootMap.EAppMap).map((elem: any) => {
      return (
        <Menu.Item
          key={String(index++)}
          onClick={() => this.handelClick(elem.key)}
        >
          {elem.val}
        </Menu.Item>
      );
    });
  }
  render(): React.ReactNode {
    return (
      <Layout>
        <Header style={{ zIndex: 1, width: "100%" }}>
          <div className={style.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            {...this.MenuItems()}
            <Menu.Item
              key={String('login')}
              onClick={() => this.handelClick('/login')}
            >
              {this.props.globalStore.auth}
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          {renderRoutes(appRouterCongfig)}
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App as any)