import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';
import register from '@/services/api/v1/user/register';

export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(register, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },

  reducers: {
    registerHandle(state, { payload }) {
      setAuthority(payload.account_type);
      reloadAuthorized();
      return {
        ...state,
        status: payload.status,
      };
    },
  },
};
