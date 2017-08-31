/**
 * Created by SHENJO on 8/25/2017.
 */
export default {
  addTodo (state, todo) {
    // 变更状态
    state.todos.push(todo);
  },
  loadTodo (state, todos) {
    state.todos = todos;
  }
}
