import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Table from './config/Table';
import SearchList from './config/SearchList';
import styles from './EePerformance.less';

/* eslint react/no-multi-comp:0 */
@connect(({ eePerformance, loading }) => ({
  eePerformance,
  loading: loading.models.eePerformance,
}))
@Form.create()
class TableList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    // 初始调用
    dispatch({
      type: 'eePerformance/fetchTableData',
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
