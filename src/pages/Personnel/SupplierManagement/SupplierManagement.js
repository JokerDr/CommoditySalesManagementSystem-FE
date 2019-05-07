import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Icon, Button, Dropdown, Menu } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Table from './config/Table';
import SearchList from './config/SearchList';
import styles from './SupplierManagement.less';
import NewGoodsfrom from './config/NewGoods';

/* eslint react/no-multi-comp:0 */
@connect(({ supplierManagement, loading }) => ({
  supplierManagement,
  loading: loading.models.rule,
}))
@Form.create()
class TableList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    // 初始调用
    dispatch({
      type: 'supplierManagement/fetchTableData',
      payload: {
        noCondition: true,
      },
    });
  }
  // 新建商品信息
  handleNewGoodsClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'supplierManagement/handleModal',
      payload: {
        modalVisible: true,
      },
    });
  };

  // 当有选中项，渲染更多的button
  handleSelectedRows = () => {
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">批量删除</Menu.Item>
      </Menu>
    );
    return (
      <span>
        <Button>批量操作</Button>
        <Dropdown overlay={menu}>
          <Button>
            更多操作 <Icon type="down" />
          </Button>
        </Dropdown>
      </span>
    );
  };

  handleMenuClick = e => {
    const { dispatch, supplierManagement } = this.props;
    const { selectedRows } = supplierManagement.table;

    if (selectedRows.length === 0) return;
    switch (e.key) {
      case 'remove':
        dispatch({
          type: `supplierManagement/remove`,
          payload: {
            key: selectedRows.map(row => row.key),
          },
        }).then(() => {
          dispatch({
            type: 'supplierManagement/handleSelectRows',
            payload: {
              key: selectedRows.map(row => row.key),
            },
          });
        });
        break;
      default:
        break;
    }
  };

  handleModalVisible = flag => {
    const { dispatch } = this.props;
    dispatch({
      type: 'supplierManagement/handleModal',
      payload: {
        modalVisible: !!flag,
      },
    });
  };

  render() {
    const { supplierManagement } = this.props;
    const { modalVisible } = supplierManagement.modal;
    const { selectedRows } = supplierManagement.table;
    return (
      <PageHeaderWrapper title="查询表格">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <SearchList />
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={this.handleNewGoodsClick}>
                新建供应商
              </Button>
              {selectedRows.length > 0 && this.handleSelectedRows()}
            </div>
            <Table />
          </div>
        </Card>
        <NewGoodsfrom visible={modalVisible} />
      </PageHeaderWrapper>
    );
  }
}

export default TableList;
