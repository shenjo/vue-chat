/**
 * Created by SHENJO on 8/25/2017.
 */
import * as types from './mutation-types'

export default {
  [types.ADDTODO] (state, todo) {
    // 变更状态
    state.todos.push(todo);
  },
  [types.LOADTODO] (state, todos) {
    state.todos = todos;
  }
}
