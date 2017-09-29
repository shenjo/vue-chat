/**
 * Created by SHENJO on 8/25/2017.
 */
import * as types from './mutation-types'

export default {
  [types.INCREMENT] (state) {
    // 变更状态
    console.log('shenjo......');
    state.count++;
  },
  [types.SOCKET_CONNECT](state,message){
    state.message = message;
  }
}
