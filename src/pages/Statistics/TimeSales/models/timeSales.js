// import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import indexTimeStatistics from '@/services/api/v1/timeStatistics/indexTimeStatistics';

export default {
  namespace: 'timeSales',
  state: {
    table: {
      selectedRows: [],
    },
    searchList: {
      expandForm: false,
      formValues: {},
    },
    data: {
      list: [],
      pagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        current: 1,
        pageSize: 10,
      },
    },
  },

  effects: {
    // 获得table数据
    *fetchTableData({ payload }, { call, put }) {
      const res = yield call(indexTimeStatistics, payload);
      yield put({
        type: 'saveTableData',
        payload: res,
      });
      // const res = yield call()
      // const res = yield call(getPurchase);
    },

    reducers: {
      handleSelectRows(state, { payload }) {
        const { selectedRows } = payload;
        return {
          ...state,
          table: {
            selectedRows,
          },
        };
      },

      handleSearchList(state, { payload }) {
        const { expandForm, formValues } = payload;
        return {
          ...state,
          searchList: {
            expandForm,
            formValues,
          },
        };
      },

      saveTableData(state, { payload }) {
        const { list } = payload;
        return {
          ...state,
          data: {
            list,
          },
        };
      },
    },
  },
};
