import React, { PureComponent } from 'react';
import { connect } from 'dva';
import StandardTable from '@/components/StandardTable';
import columns from './tableColums';

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

@connect(({ enterpriseManagement, loading }) => ({
  enterpriseManagement,
  loading: loading.models.enterpriseManagement,
}))
class Table extends PureComponent {
  handleSelectRows = rows => {
    const { dispatch } = this.props;
    dispatch({
      type: 'enterpriseManagement/handleSelectRows',
      payload: {
        selectedRows: rows,
      },
    });
  };

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch, enterpriseManagement } = this.props;
    const { formValues } = enterpriseManagement.searchList;

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
      type: 'enterpriseManagement/fetchTableData',
      payload: {
        noCondition: false,
        tableConf: params,
      },
    });
  };

  render() {
    const {
      enterpriseManagement: { data },
      loading,
      dispatch,
    } = this.props;
    const handle = {
      update(curtData) {
        // 变更当前操作的record
        dispatch({
          type: 'enterpriseManagement/handleCurtUpdateData',
          payload: {
            curtData,
          },
        });
        // 显示modal
        dispatch({
          type: 'enterpriseManagement/handleUpdateModal',
          payload: {
            modalVisible: true,
          },
        });
      },
      remove(_id) {
        // 调用移除action
        dispatch({
          type: 'enterpriseManagement/remove',
          payload: {
            _id,
          },
        });
      },
    };
    const { enterpriseManagement } = this.props;
    const { selectedRows } = enterpriseManagement.table;
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
