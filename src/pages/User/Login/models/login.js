import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import login from '@/services/api/v1/session/login';
// import getCaptcha from '@/services/api/tools/getCaptcha'
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { setToken, setTokenOwner, removeToken } from '@/utils/tokenHandle';
import { reloadAuthorized } from '@/utils/Authorized';
import { savePower } from '@/utils/userPower';

export default {
  namespace: 'login',

  state: {
    // captchaSVG: null,
    status: undefined,
    type: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (response.code === 1) {
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            redirect = null;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
    },

    // *loadCaptcha({ payload }, { call, put }) {
    //   const res = yield call(getCaptcha, payload);
    //   yield put({
    //     type: 'changeCaptcha',
    //     payload: res,
    //   });
    // },

    *logout(_, { put }) {
      console.log(111);
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      // redirect
      if (window.location.pathname !== '/user/login') {
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          })
        );
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      // 设定当前登陆角色权限
      const { type, email, token, powersMap } = payload.data;
      setAuthority(type);
      // 将token存储到localstorage内
      removeToken();
      setTokenOwner(email);
      setToken(token);
      savePower(powersMap);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
    // changeCaptcha(state, { payload }) {
    //   return {
    //     ...state,
    //     captchaSVG: payload,
    //   };
    // }
  },
};
