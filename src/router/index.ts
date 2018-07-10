import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
import DefaultHome from '../app/pages/home/defaultHome/defaultHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DefaultHome',
      component: DefaultHome
    }
  ]
})
