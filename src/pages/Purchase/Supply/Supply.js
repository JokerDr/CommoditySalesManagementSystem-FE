import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Icon, Button, Dropdown, Menu } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Table from './config/Table';
import SearchList from './config/SearchList';
import styles from './Supply.less';
import NewGoodsfrom from './config/NewGoods';

/* eslint react/no-multi-comp:0 */
@connect(({ purchaseSupply, loading }) => ({
  purchaseSupply,
  loading: loading.models.rule,
}))
@Form.create()
class TableList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    // 初始调用
    dispatch({
      type: 'purchaseSupply/fetchTableData',
      payload: {},
    });
  }

  // 新建商品信息
  handleNewGoodsClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'purchaseSupply/handleModal',
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
    const { dispatch, purchaseSupply } = this.props;
    const { selectedRows } = purchaseSupply.table;

    if (selectedRows.length === 0) return;
    switch (e.key) {
      case 'remove':
        dispatch({
          type: `purchaseSupply/remove`,
          payload: {
            key: selectedRows.map(row => row.key),
          },
        }).then(() => {
          dispatch({
            type: 'purchaseSupply/handleSelectRows',
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
      type: 'purchaseSupply/handleModal',
      payload: {
        modalVisible: !!flag,
      },
    });
  };

  // handleAdd = fields => {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'rule/add',
  //     payload: {
  //       desc: fields.desc,
  //     },
  //   });

  //   message.success('添加成功');
  //   this.handleModalVisible();
  // };

  // handleUpdate = fields => {
  //   const { dispatch } = this.props;
  //   const { formValues } = this.state;
  //   dispatch({
  //     type: 'rule/update',
  //     payload: {
  //       query: formValues,
  //       body: {
  //         name: fields.name,
  //         desc: fields.desc,
  //         key: fields.key,
  //       },
  //     },
  //   });

  //   message.success('配置成功');
  //   this.handleUpdateModalVisible();
  // };

  render() {
    const { purchaseSupply } = this.props;
    const { modalVisible } = purchaseSupply.modal;
    const { selectedRows } = purchaseSupply.table;
    // const parentMethods = {
    //   handleAdd: this.handleAdd,
    //   handleModalVisible: this.handleModalVisible,
    // };
    return (
      <PageHeaderWrapper title="查询表格">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <SearchList />
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={this.handleNewGoodsClick}>
                新建采购商品
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
