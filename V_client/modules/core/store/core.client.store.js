/**
 * Created by SHENJO on 8/25/2017.
 */
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const coreStore = {
  state,
  mutations,
  actions,
  getters
};

export default coreStore
