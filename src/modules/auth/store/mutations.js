/**
 * Created by SHENJO on 8/25/2017.
 */
export default {
  login (state, userObj) {
    state.authed = true;
    state.user = userObj;
  },
  logout (state) {
    state.authed = false;
    state.user = null;
  }
}
