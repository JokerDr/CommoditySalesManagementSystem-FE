import * as React from "react";
import { ComponentExt } from '@utils/componentExt/componentExt'
import { Layout, Menu, Icon } from 'antd';
import { getEKV } from '@utils/ENUM';
import style from '@styles/app.scss'
const { Sider } = Layout;

interface ISiderMenu{
  isIconsArr?: [],
  ESider: any

}

export class SiderMenu<T> extends ComponentExt<T, ISiderMenu> {
  protected isIconsArr: [] = null;
  protected ESider: any = null;
  private isClosed: boolean = false
  constructor(S?: any){
    super(S);
    this.isIconsArr = this.props.isIconsArr || null;
    this.ESider = this.props.ESider;
  }

  handleOpen(){
    this.isClosed = !this.isClosed;
  }

  public siderMenu = (): React.ReactNode =>{
    let idx = 0;
    return (
      <Menu 
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
      {
        getEKV(this.ESider).map((elem: any, index: number)=>{
          return (
            <Menu.Item key={String(idx++)}>
              {this.isIconsArr !== null && this.isIconsArr.length !== 0 && <Icon type={this.isIconsArr[index]} />}
              <span>{elem.val}</span>
            </Menu.Item>
          )
        })
      }
      </Menu>
    )
  }

  render(): React.ReactNode{
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