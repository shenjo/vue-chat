/**
 * Created by SHENJO on 8/25/2017.
 */
export default {
  increment (context) {
    console.log('this is in action model. trigger by store.dispatch')
    context.commit('increment')
  }
}
