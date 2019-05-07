// import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import showSupplier from '@/services/api/v1/supplierManagement/showSupplier';
import updateSupplier from '@/services/api/v1/supplierManagement/updateSupplier';
import createSupplier from '@/services/api/v1/supplierManagement/createSupplier';
import deleteSupplier from '@/services/api/v1/supplierManagement/deleteSupplier';

export default {
  namespace: 'supplierManagement',

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
      const res = yield call(showSupplier, payload);
      yield put({
        type: 'saveTableData',
        payload: res,
      });
      // const res = yield call()
      // const res = yield call(getPurchase);
    },

    // 新建商品
    *add({ payload, callback }, { call, put }) {
      const response = yield call(createSupplier, payload);
      yield put({
        type: 'saveTableData',
        payload: response,
      });
      if (callback) callback();
    },

    // 删除
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(deleteSupplier, payload);
      yield put({
        type: 'saveTableData',
        payload: response,
      });
      if (callback) callback();
    },

    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateSupplier, payload);
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
