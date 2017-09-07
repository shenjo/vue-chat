/**
 * Created by SHENJO on 8/28/2017.
 */
import axios from 'axios'
import querystring from 'querystring'
import _ from 'lodash'

function loadTodoList (criteria) {
  const api = `/api/todos?${querystring.stringify(criteria)}`;
  return axios.get(api);
}

function addTodo (todo) {
  const api = '/api/todos';
  if (_.isEmpty(todo)) {
    throw new Error('todo is null.');
  }
  return axios({ method: 'post', url: api, data: todo });
}

export default {
  loadTodoList,
  addTodo
}
