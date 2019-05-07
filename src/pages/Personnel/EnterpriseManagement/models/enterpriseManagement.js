// import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import showEnterprise from '@/services/api/v1/enterpriseManagement/showEnterprise';
import updateEnterprise from '@/services/api/v1/enterpriseManagement/updateEnterprise';
import createEnterprise from '@/services/api/v1/enterpriseManagement/createEnterprise';
import deleteEnterprise from '@/services/api/v1/enterpriseManagement/deleteEnterprise';

export default {
  namespace: 'enterpriseManagement',

  state: {
    table: {
      selectedRows: [],
    },
    searchList: {
      formValues: {},
    },
    modal: {
      modalVisible: false,
      confirmLoading: false,
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
      const res = yield call(showEnterprise, payload);
      yield put({
        type: 'saveTableData',
        payload: res,
      });
      // const res = yield call()
      // const res = yield call(getPurchase);
    },

    // 新建商品
    *add({ payload, callback }, { call, put }) {
      const response = yield call(createEnterprise, payload);
      yield put({
        type: 'saveTableData',
        payload: response,
      });
      if (callback) callback();
    },

    // 删除
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(deleteEnterprise, payload);
      yield put({
        type: 'saveTableData',
        payload: response,
      });
      if (callback) callback();
    },

    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateEnterprise, payload);
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

    handleModal(state, { payload }) {
      const { modalVisible, confirmLoading } = payload;
      return {
        ...state,
        modal: {
          modalVisible,
          confirmLoading: confirmLoading || false,
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
