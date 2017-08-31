/**
 * Created by SHENJO on 8/25/2017.
 */
import authCtrl from '../apis/auth.client.api'
export default {
  checkLogin ({ commit }) {
    let session = authCtrl.getCookie('session');
    if (session) {
      commit('login');
    }
    return session;
  },
  userLogin ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        authCtrl.setCookie('session', 'asdasdasd');
        resolve({ username: 'JOEY SHEN', location: 'ZHA' });
      }, 500);
    });
  },
  userLogout ({ commit }) {
    authCtrl.delCookie('session');
    commit('logout');
  }
}

