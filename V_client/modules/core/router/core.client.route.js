import Hello from '../components/Hello'
import Faq from '../components/faq'

const routes = [{
  path: '/',
  name: 'Hello',
  component: Hello,
  meta: { requiresAuth: true }
}, {
  path: '/faq',
  component: Faq,
  meta: { requiresAuth: true }
}];

export default routes
