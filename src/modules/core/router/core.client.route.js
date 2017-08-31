import Hello from '../components/Hello'
import Faq from '../components/faq'

const routes = [{
  path: '/',
  name: 'Hello',
  component: Hello,
  meta: { requiresAuth: true }
}, {
  path: '/faq',
  component: Faq
}];

export default routes
