import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Table from './config/Table';
import SearchList from './config/SearchList';
import styles from './EeSales.less';
import Charts from '@/commonView/Charts';

/* eslint react/no-multi-comp:0 */
@connect(({ eeSales, loading }) => ({
  eeSales,
  loading: loading.models.eeSales,
}))
@Form.create()
class TableList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    // 初始调用
    dispatch({
      type: 'eeSales/fetchTableData',
      payload: {},
    });
  }

  render() {
    const { eeSales } = this.props;
    const {
      data: { list },
    } = eeSales;
    const chartsConf = {
      hasLegend: true,
      title: '员工销售统计',
      subTitle: '员工销售统计', // pie
      data: list,
      height: 294,
    };
    const childStyle = {
      flex: '0 1 50%',
    };
    return (
      <PageHeaderWrapper title="查询表格">
        <Card bordered={false}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={styles.tableList} style={{ ...childStyle, paddingLeft: '10px' }}>
              <SearchList />
              <Table />
            </div>
            <div style={{ ...childStyle, paddingLeft: '10px' }}>
              <Charts {...chartsConf} />
            </div>
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default TableList;
