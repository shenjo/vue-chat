/**
 * Created by SHENJO on 8/28/2017.
 */
import Login from '../components/login'

const routes = [{
  path: '/login',
  name: 'log in',
  component: Login,
  meta: { requiresAuth: false }
}];

export default routes
