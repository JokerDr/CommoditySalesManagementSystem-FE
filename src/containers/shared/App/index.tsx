import * as React from 'react'
import { hot } from 'react-hot-loader';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { renderRoutes } from 'react-router-config';
import { appRouterCongfig } from '@routers/app';
import { getEKV, EMenu } from "@utils/ENUM";
import style from '@styles/app.scss'
const { Header } = Layout;
const {ERootMenu} = EMenu

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

  // 跳转到主页，并将用户信息清除
  private toLogout(): void {
    this.props.globalStore.setAuth = null;
    this.props.routerStore.push('/')
  }

  private handleLogOut(): void{
    this.props.globalStore.auth
      ? this.toLogout()
      : this.handelClick('/login') 
  }
  

  private handelClick(path: string): void {
    this.props.routerStore.push(path)
  }
  private MenuItems(): React.ReactNode[] {
    let index = 0;
    return getEKV(ERootMenu).map((elem: any) => {
      return (
        <Menu.Item
          key={String(index++)}
          className={style.appHeaderMenuItem}
          onClick={() => this.handelClick(elem.key)}
        >
          {elem.val}
        </Menu.Item>
      );
    });
  }

  private logMenuItem(): React.ReactNode{
    return (
      <Menu.Item
        key={String("log")}
        className={style.appHeaderMenuItem}
        onClick={() => this.handleLogOut()}
      >
        {this.props.globalStore.auth !== null ? "登出" : "登入"}
      </Menu.Item>
    );
  }
  render(): React.ReactNode {
    return (
      <Layout className={style.app}>
        <Header className={style.appHeader}>
          <div className={style.appLogo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            className={style.appHeaderMenu}
          >
            {...this.MenuItems()}
            {this.logMenuItem()}
          </Menu>
        </Header>
        {renderRoutes(appRouterCongfig)}
      </Layout>
    );
  }
}

export default withRouter(App as any)