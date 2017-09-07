/**
 * Created by SHENJO on 8/25/2017.
 */
import todoApi from '../apis/todo.client.api';
import * as types from './mutation-types'

export default {
  [types.ADDTODO] ({ commit }, todo) {
    todoApi.addTodo(todo).then(() => {
      commit(types.ADDTODO, todo);
    }).catch((err) => {
      console.log(err);
    });
  },
  [types.LOADTODO] ({ commit }) {
    todoApi.loadTodoList().then((res) => {
      commit(types.LOADTODO, res.data);
    }).catch((err) => {
      console.log(err);
    });
  }
}
