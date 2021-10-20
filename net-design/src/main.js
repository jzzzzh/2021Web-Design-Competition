// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

/* eslint-disable no-new */
Vue.component( 'test-component', {
  template: `
  <div>
    <v-alert type="success">
    It's a test message
    </v-alert>
  </div>`
})

new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify: new Vuetify(),
  template: '<app/>'
})
