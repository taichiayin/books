import Vue from 'vue'
import App from './App.vue'
import router from './router'
// css reset
import '@/assets/style/reset.css'
// icon svg setting
import '@/assets/icons/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
