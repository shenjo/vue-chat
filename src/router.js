/**
 * Created by SHENJO on 8/25/2017.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store'
import _ from 'lodash'

Vue.use(VueRouter);

let router = new VueRouter({});

router.beforeEach((to, from, next) => {
  if (Store.state.auth.authed || to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (_.isEmpty(Store.state.auth) || !Store.state.auth.authed) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
});

export default router
