// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import _ from 'lodash'
import Element from 'element-ui'
import router from './router'
import store from './store'
import './modules/index'
import * as filters from './filter'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
Vue.config.productionTip = false;
Vue.use(Element);
_.each(filters, (filter) => {
  Vue.filter(filter, filters[filter])
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
