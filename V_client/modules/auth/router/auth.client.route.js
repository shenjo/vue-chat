/**
 * Created by SHENJO on 8/28/2017.
 */
import Login from '../components/login'
import Signup from '../components/signup'

const routes = [{
  path: '/login',
  name: 'log in',
  component: Login,
  meta: { requiresAuth: false }
}, {
  path: '/signup',
  name: 'sign up',
  component: Signup,
  meta: { requiresAuth: false }
}];

export default routes
