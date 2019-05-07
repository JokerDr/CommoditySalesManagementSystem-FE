import React, { PureComponent } from 'react';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import columns from './tableColums';

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

@connect(({ purchaseSupply, loading }) => ({
  purchaseSupply,
  loading: loading.models.purchaseSupply,
}))
class Table extends PureComponent {
  handleSelectRows = rows => {
    const { dispatch } = this.props;
    dispatch({
      type: 'purchaseSupply/handleSelectRows',
      payload: {
        selectedRows: rows,
      },
    });
  };

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch, purchaseSupply } = this.props;
    const { formValues } = purchaseSupply.searchList;

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
      type: 'purchaseSupply/fetchTableData',
      payload: {
        tableConf: params,
      },
    });
  };

  render() {
    const {
      purchaseSupply: { data },
      loading,
      dispatch,
    } = this.props;
    const handle = {
      update(curtData) {
        // 变更当前操作的record
        dispatch({
          type: 'purchaseSupply/handleCurtUpdateData',
          payload: {
            curtData,
          },
        });
        // 显示modal
        dispatch({
          type: 'purchaseSupply/handleUpdateModal',
          payload: {
            modalVisible: true,
          },
        });
      },
      remove(codes) {
        // 调用移除action
        dispatch({
          type: 'purchaseSupply/remove',
          payload: {
            goodsCode: codes,
          },
        });
      },
    };
    const { purchaseSupply } = this.props;
    const { selectedRows } = purchaseSupply.table;
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
