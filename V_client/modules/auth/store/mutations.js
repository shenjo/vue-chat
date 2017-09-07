/**
 * Created by SHENJO on 8/25/2017.
 */
import * as types from './mutation-types'

export default {
  [types.LOGIN] (state, userObj) {
    state.authed = true;
    state.user = userObj;
  },
  [types.LOGOUT] (state) {
    state.authed = false;
    state.user = null;
  }
}
