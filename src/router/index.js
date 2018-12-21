import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CK from '@/components/CK'
import Charts from '@/components/Charts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ck',
      name: 'CK',
      component: CK
    },
    {
      path: '/chart',
      name: 'Charts',
      component: Charts
    }
  ]
})
