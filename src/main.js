import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Adsense from 'vue-google-adsense/dist/Adsense.min.js'


Vue.config.productionTip = false

Vue.use(require('vue-script2'))

Vue.use(Adsense)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
