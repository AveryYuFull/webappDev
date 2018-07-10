// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './css/_reset.less'

import { initComponent } from './commonModule/component.module'

Vue.config.productionTip = false

// 注册全局组件
initComponent()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
