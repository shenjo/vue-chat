/**
 * Created by SHENJO on 8/25/2017.
 */
import todoApi from '../apis/todo.client.api';

export default {
  addTodo ({ commit }, todo) {
    todoApi.addTodo(todo).then(() => {
      commit('addTodo', todo);
    }).catch((err) => {
      console.log(err);
    });
  },
  loadTodo ({ commit }) {
    todoApi.loadTodoList().then((res) => {
      commit('loadTodo', res.data);
    }).catch((err) => {
      console.log(err);
    });
  }
}
