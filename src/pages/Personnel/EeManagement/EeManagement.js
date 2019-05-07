import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Icon, Button, Dropdown, Menu } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Table from './config/Table';
import SearchList from './config/SearchList';
import styles from './EeManagement.less';

/* eslint react/no-multi-comp:0 */
@connect(({ eeManagement, loading }) => ({
  eeManagement,
  loading: loading.models.rule,
}))
@Form.create()
class TableList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    // 初始调用
    dispatch({
      type: 'eeManagement/fetchTableData',
      payload: {
        noCondition: true,
      },
    });
  }

  // 新建商品信息
  handleNewGoodsClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'eeManagement/handleModal',
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
    const { dispatch, eeManagement } = this.props;
    const { selectedRows } = eeManagement.table;

    if (selectedRows.length === 0) return;
    switch (e.key) {
      case 'remove':
        dispatch({
          type: `eeManagement/remove`,
          payload: {
            key: selectedRows.map(row => row.key),
          },
        }).then(() => {
          dispatch({
            type: 'eeManagement/handleSelectRows',
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
      type: 'eeManagement/handleModal',
      payload: {
        modalVisible: !!flag,
      },
    });
  };

  render() {
    const { eeManagement } = this.props;
    const { selectedRows } = eeManagement.table;
    return (
      <PageHeaderWrapper title="查询表格">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <SearchList />
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={this.handleNewGoodsClick}>
                新建客户
              </Button>
              {selectedRows.length > 0 && this.handleSelectedRows()}
            </div>
            <Table />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default TableList;
