import * as React from "react";
import { ComponentExt } from '@utils/componentExt/componentExt'
import { Layout, Menu, Icon } from 'antd';
import { getEKV } from '@utils/ENUM';
import style from '@styles/app.scss'
import { inject, observer } from 'mobx-react';
import { hot } from 'react-hot-loader';
const { Sider } = Layout;

export interface ISiderMenu{
  isIconsArr?: []
  ESider: any
  globalStore?: IGlobalStore.GlobalStore
  routerStore?: IRouterStore.RouterStore
}


@inject("globalStore", "routerStore")
@hot(module)
@observer
export class SiderMenu<T> extends ComponentExt<T, ISiderMenu> {
  protected isIconsArr: [] = null;
  protected ESider: any = null;
  private isClosed: boolean = false;
  constructor(S?: any) {
    super(S);
    this.isIconsArr = this.props.isIconsArr || null;
    this.ESider = this.props.ESider;
  }

  handleOpen() {
    this.isClosed = !this.isClosed;
  }

  handleClick(path: string) {
    this.props.routerStore.push(path)
  }

  public siderMenu = (): React.ReactNode => {
    let idx = 0;
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={["0"]}
        defaultOpenKeys={["sub1"]}
      >
        {getEKV(this.ESider).map((elem: any, index: number) => {
          return (
            <Menu.Item
              key={String(idx++)}
              className={style.appSiderMenuItem}
              onClick={() => this.handleClick(elem.key)}
            >
              {this.isIconsArr !== null && this.isIconsArr.length !== 0 && (
                <Icon type={this.isIconsArr[index]} />
              )}
              <span>{elem.val}</span>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  render(): React.ReactNode {
    return (
      <Sider
        collapsed={this.isClosed}
        onCollapse={this.handleOpen}
        className={style.appSider}
      >
        {this.siderMenu()}
      </Sider>
    );
  }
}