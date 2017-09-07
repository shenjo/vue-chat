/**
 * Created by SHENJO on 8/28/2017.
 */
import Todo from '../components/todo'

const routes = [{
  path: '/todo',
  name: 'todos',
  component: Todo,
  meta: { requiresAuth: true }
}];

export default routes
