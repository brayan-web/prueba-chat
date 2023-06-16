import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify)
new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App),
}).$mount('#app')
