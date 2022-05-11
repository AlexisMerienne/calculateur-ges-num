import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'


import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
import VueSession from 'vue-session'
import CarbonBadge from 'vue-carbonbadge'

import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueSession)
Vue.use(CarbonBadge)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
