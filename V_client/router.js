/**
 * Created by SHENJO on 8/25/2017.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store'
import _ from 'lodash'
import axios from 'axios'

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  // if (Store.state.auth.authed || to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (_.isEmpty(Store.state.auth) || !Store.state.auth.authed) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 确保一定要调用 next()
  // }

  if (!Store.state.auth.authed && to.matched.some(record => record.meta.requiresAuth)) {
    axios.get('/api/auth').then((res) => {
      var user = res.data;
      if (_.isEmpty(user)) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        router.app.$store.commit('LOGIN', user);
        next();
      }
    })

  } else {
    next();
  }

});

export default router
