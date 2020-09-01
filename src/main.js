import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import Menu from '@/components/Menu.vue'
import router from '@/router'

Vue.component('app-header', Menu)
Vue.use(VModal)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
