// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import router from './router'
import store from './store'
import './modules/index'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
Vue.config.productionTip = false;
Vue.use(Element);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created () {
    this.$store.dispatch('CHECKLOGIN');
    if (this.$store.state.auth.authed) {
      this.$router.push('/');
    }
  },
  template: '<App/>',
  components: { App }
});
