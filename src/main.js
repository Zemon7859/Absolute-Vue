import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import store from './store/'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import router from './router'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.prototype.$http = Axios

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // $,
  router,
  store,
  components: { App },
  template: '<App/>'
})
