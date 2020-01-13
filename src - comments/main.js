/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
Vue.config.devtools = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
