// import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import indexCustomer from '@/services/api/v1/customerManagement/indexCustomer';
import getSupplyGoods from '@/services/api/v1/saleSupply/getSupplyGoods';
import updateSupplyGoods from '@/services/api/v1/saleSupply/updateSupplyGoods';
import createSupplyGoods from '@/services/api/v1/saleSupply/createSupplyGoods';
import deleteSupplyGoods from '@/services/api/v1/saleSupply/deleteSupplyGoods';

export default {
  namespace: 'saleSupply',

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
      const res = yield call(getSupplyGoods, payload);
      yield put({
        type: 'saveTableData',
        payload: res,
      });
      // const res = yield call()
      // const res = yield call(getPurchase);
    },

    // 新建商品
    *add({ payload, callback }, { call, put }) {
      const response = yield call(createSupplyGoods, payload);
      yield put({
        type: 'saveTableData',
        payload: response,
      });
      if (callback) callback();
    },

    // 删除
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(deleteSupplyGoods, payload);
      yield put({
        type: 'saveTableData',
        payload: response,
      });
      if (callback) callback();
    },

    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateSupplyGoods, payload);
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
