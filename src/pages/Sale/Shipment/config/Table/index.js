import React, { PureComponent } from 'react';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import columns from './tableColums';

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

@connect(({ saleShipment, loading }) => ({
  saleShipment,
  loading: loading.models.saleShipment,
}))
class Table extends PureComponent {
  handleSelectRows = rows => {
    const { dispatch } = this.props;
    dispatch({
      type: 'saleShipment/handleSelectRows',
      payload: {
        selectedRows: rows,
      },
    });
  };

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch, saleShipment } = this.props;
    const { formValues } = saleShipment.searchList;

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
      type: 'saleShipment/fetchTableData',
      payload: {
        tableConf: params,
      },
    });
  };

  render() {
    const {
      saleShipment: { data },
      loading,
      dispatch,
    } = this.props;
    const handle = {
      update(curtData) {
        // 变更当前操作的record
        dispatch({
          type: 'saleShipment/handleCurtUpdateData',
          payload: {
            curtData,
          },
        });
        // 显示modal
        dispatch({
          type: 'saleShipment/handleUpdateModal',
          payload: {
            modalVisible: true,
          },
        });
      },
      remove(_id) {
        // 调用移除action
        dispatch({
          type: 'saleShipment/remove',
          payload: {
            _id,
          },
        });
      },
    };
    const { saleShipment } = this.props;
    const { selectedRows } = saleShipment.table;
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
