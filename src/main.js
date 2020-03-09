import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Clipboard from 'v-clipboard'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Clipboard)
new Vue({
  Clipboard,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
