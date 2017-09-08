/**
 * Created by SHENJO on 8/25/2017.
 */
import * as types from './mutation-types'
import axios from 'axios'
import apis from '../apis/auth.client.api'

import authCtrl from '../apis/auth.client.api'
export default {
  [types.CHECKLOGIN] ({ commit }) {
    let session = authCtrl.getCookie('session');
    if (session) {
      commit(types.LOGIN, {});
    }
    return session;
  },
  [types.USERLOGIN] ({ commit },user) {
    return apis.userSignin(user);
  },
  [types.USERLOGOUT] ({ commit }) {
    commit(types.LOGOUT);
    axios.get('/api/auth/logout');
  },
  [types.USERSIGNUP] ({ commit }, userObj) {
    return axios.post('/api/auth/signup', userObj)
  }
}

