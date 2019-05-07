import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Icon, Button, Dropdown, Menu } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Table from './config/Table';
import SearchList from './config/SearchList';
import styles from './Check.less';

/* eslint react/no-multi-comp:0 */
@connect(({ check, loading }) => ({
  check,
  loading: loading.models.check,
}))
@Form.create()
class TableList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    // 初始调用
    dispatch({
      type: 'check/fetchTableData',
      payload: {},
    });
  }

  render() {
    return (
      <PageHeaderWrapper title="查询表格">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <SearchList />
            <Table />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default TableList;
