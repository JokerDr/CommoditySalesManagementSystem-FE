import React, { PureComponent } from 'react';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import columns from './tableColums';

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

@connect(({ saleSupply, loading }) => ({
  saleSupply,
  loading: loading.models.saleSupply,
}))
class Table extends PureComponent {
  handleSelectRows = rows => {
    const { dispatch } = this.props;
    dispatch({
      type: 'saleSupplyeSelectRows',
      payload: {
        selectedRows: rows,
      },
    });
  };

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch, saleSupply } = this.props;
    const { formValues } = saleSupply.searchListt;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      current: pagination.currentPage,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'saleSupplyTableData',
      payload: {
        tableConf: params,
      },
    });
  };

  render() {
    const {
      saleSupply: { data },
      loading,
      dispatch,
    } = this.props;
    const handle = {
      update(curtData) {
        // 变更当前操作的record
        dispatch({
          type: 'saleSupplyeCurtUpdateData',
          payload: {
            curtData,
          },
        });
        // 显示modal
        dispatch({
          type: 'saleSupplyeUpdateModal',
          payload: {
            modalVisible: true,
          },
        });
      },
      remove(_id) {
        // 调用移除action
        dispatch({
          type: 'saleSupplye',
          payload: {
            _id,
          },
        });
      },
    };
    const {
      saleSupply: {
        table: { selectedRows },
      },
    } = this.props;
    return (
      <StandardTable
        selectedRows={selectedRows}
        loading={loading}
        data={data}
        columns={columns(handle)}
        onSelectRow={this.handleSelectRows}
        onChange={this.handleStandardTableChange}
      />
    );
  }
}

export default Table;
