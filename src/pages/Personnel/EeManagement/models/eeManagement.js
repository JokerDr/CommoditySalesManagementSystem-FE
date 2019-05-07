// import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import showEmployee from '@/services/api/v1/employee/showEmployee';
import updateEmployee from '@/services/api/v1/employee/updateEmployee';

export default {
  namespace: 'eeManagement',

  state: {
    table: {
      selectedRows: [],
    },
    searchList: {
      formValues: {},
    },
    updateModal: {
      curtData: {},
      modalVisible: false,
      confirmLoading: false,
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
      const res = yield call(showEmployee, payload);
      yield put({
        type: 'saveTableData',
        payload: res,
      });
      // const res = yield call()
      // const res = yield call(getPurchase);
    },

    // // 删除
    // *remove({ payload, callback }, { call, put }) {
    //   const response = yield call(deleteCustomer, payload);
    //   yield put({
    //     type: 'saveTableData',
    //     payload: response,
    //   });
    //   if (callback) callback();
    // },

    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateEmployee, payload);
      yield put({
        type: 'saveTableData',
        payload: response,
      });
      if (callback) callback();
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

    handleUpdateModal(state, { payload }) {
      const { modalVisible, confirmLoading } = payload;
      return {
        ...state,
        updateModal: {
          modalVisible,
          confirmLoading: confirmLoading || false,
        },
      };
    },

    handleCurtUpdateData(state, { payload }) {
      const { curtData } = payload;
      return {
        ...state,
        updateModal: {
          curtData,
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
