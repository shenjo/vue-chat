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
import './theme.css'
import VueSocketio from 'vue-socket.io'

import App from './App'
Vue.config.productionTip = false;
Vue.use(Element);
_.each(filters, (filter) => {
  Vue.filter(filter, filters[filter])
});
/* eslint-disable no-new */
Vue.use(VueSocketio, 'http://localhost:3000');
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  sockets:{
    connect: function(){
    },
    online: function(val){
      this.$notify.success({
        message: val+' online.',
        offset: 100,
        duration:2500
      });
    }
  }
});
