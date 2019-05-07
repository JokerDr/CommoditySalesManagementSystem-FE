// import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import indexCustomer from '@/services/api/v1/customerManagement/indexCustomer';
import getShipmentGoods from '@/services/api/v1/saleShipment/getShipmentGoods';
import updateShipmentGoods from '@/services/api/v1/saleShipment/updateShipmentGoods';
import createShipmentGoods from '@/services/api/v1/saleShipment/createShipmentGoods';
import deleteShipmentGoods from '@/services/api/v1/saleShipment/deleteShipmentGoods';

export default {
  namespace: 'saleShipment',

  state: {
    table: {
      selectedRows: [],
    },
    searchList: {
      expandForm: false,
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
    suppliers: [], // [{supplierId: , name: ''}]
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
    // 获取客户的数量
    // eslint-disable-next-line no-unused-vars
    *fetchSuppliers({ payload, callback }, { call, put }) {
      const response = yield call(indexCustomer, payload);
      yield put({
        type: 'saveSuppliers',
        payload: response,
      });
    },

    // 获得table数据
    *fetchTableData({ payload }, { call, put }) {
      const res = yield call(getShipmentGoods, payload);
      yield put({
        type: 'saveTableData',
        payload: res,
      });
      // const res = yield call()
      // const res = yield call(getPurchase);
    },

    // 新建商品
    *add({ payload, callback }, { call, put }) {
      const response = yield call(createShipmentGoods, payload);
      yield put({
        type: 'saveTableData',
        payload: response,
      });
      if (callback) callback();
    },

    // 删除
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(deleteShipmentGoods, payload);
      yield put({
        type: 'saveTableData',
        payload: response,
      });
      if (callback) callback();
    },

    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateShipmentGoods, payload);
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
      const { expandForm, formValues } = payload;
      return {
        ...state,
        searchList: {
          expandForm,
          formValues,
        },
      };
    },
    saveSuppliers(state, { payload }) {
      const { suppliers } = payload.data;
      // console.log('suppliers:', suppliers);
      return {
        ...state,
        suppliers: suppliers || [],
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
