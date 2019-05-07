import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Table from './config/Table';
import SearchList from './config/SearchList';
import styles from './CommodityProfit.less';

/* eslint react/no-multi-comp:0 */
@connect(({ commodityProfit, loading }) => ({
  commodityProfit,
  loading: loading.models.commodityProfit,
}))
@Form.create()
class TableList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    // 初始调用
    dispatch({
      type: 'commodityProfit/fetchTableData',
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
