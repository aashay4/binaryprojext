import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Adsense from 'vue-google-adsense/dist/Adsense.min.js'
import InArticleAdsense from 'vue-google-adsense/dist/InArticleAdsense.min.js'
import InFeedAdsense from 'vue-google-adsense/dist/InFeedAdsense.min.js'


Vue.config.productionTip = false

Vue.use(require('vue-script2'))

Vue.use(Adsense)
Vue.use(InArticleAdsense)
Vue.use(InFeedAdsense)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
