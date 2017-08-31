/**
 * Created by SHENJO on 8/25/2017.
 */
import * as types from './mutation-types'

import authCtrl from '../apis/auth.client.api'
export default {
  [types.CHECKLOGIN] ({ commit }) {
    let session = authCtrl.getCookie('session');
    if (session) {
      commit(types.LOGIN);
    }
    return session;
  },
  [types.USERLOGIN] ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        authCtrl.setCookie('session', 'asdasdasd');
        resolve({ username: 'JOEY SHEN', location: 'ZHA' });
      }, 500);
    });
  },
  [types.USERLOGOUT] ({ commit }) {
    authCtrl.delCookie('session');
    commit(types.LOGOUT);
  }
}

