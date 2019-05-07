// import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import indexEeProfit from '@/services/api/v1/eeProfit/indexEeProfit';

export default {
  namespace: 'eePerformance',
  state: {
    table: {
      selectedRows: [],
    },
    searchList: {
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
      const res = yield call(indexEeProfit, payload);
      yield put({
        type: 'saveTableData',
        payload: res,
      });
      // const res = yield call()
      // const res = yield call(getPurchase);
    },
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
      const { formValues } = payload;
      return {
        ...state,
        searchList: {
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
};
