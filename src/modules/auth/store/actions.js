/**
 * Created by SHENJO on 8/25/2017.
 */
import * as types from './mutation-types'
import axios from 'axios'

import authCtrl from '../apis/auth.client.api'
export default {
  [types.CHECKLOGIN] ({ commit }) {
    let session = authCtrl.getCookie('session');
    if (session) {
      commit(types.LOGIN, {});
    }
    return session;
  },
  [types.USERLOGIN] ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.LOGIN, {});
        authCtrl.setCookie('session', 'asdasdasd');
        resolve({ username: 'JOEY SHEN', location: 'ZHA' });
      }, 500);
    });
  },
  [types.USERLOGOUT] ({ commit }) {
    authCtrl.delCookie('session');
    commit(types.LOGOUT);
  },
  [types.USERSIGNUP] ({ commit }, userObj) {
    console.log(userObj);
    axios.post('/api/auth/signup', userObj)
      .then((res) => {
        commit(types.LOGIN, res.data);
      }).catch(err => {
        console.log(err);
      })
  }
}

