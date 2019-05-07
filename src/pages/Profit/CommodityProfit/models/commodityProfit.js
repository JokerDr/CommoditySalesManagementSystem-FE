// import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import indexgoodsProfit from '@/services/api/v1/goodsProfit/indexgoodsProfit';

export default {
  namespace: 'commodityProfit',
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
      const res = yield call(indexgoodsProfit, payload);
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
};
