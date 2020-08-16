import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticlesUse from 'vue-particles-use'

Vue.config.productionTip = false

Vue.use(VueParticlesUse)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
