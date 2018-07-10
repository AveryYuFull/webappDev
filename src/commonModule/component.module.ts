import Vue from 'vue'

import KidLayout from '../app/layouts/layout/layout.vue'
import KidLayoutBox from '../app/layouts/layoutBox/layoutBox.vue'
import KidHeader from '../app/layouts/header/header.vue'
import KidBody from '../app/layouts/body/body.vue'
import KidFooter from '../app/layouts/footer/footer.vue'

import KidSearchOne from '../app/common/components/diyForm/searchOne/searchOne.vue'

// 注册全局组件
export function initComponent () {
  // 注册layout全局组件
  Vue.component('kid-layout', KidLayout)
  Vue.component('kid-layout-box', KidLayoutBox)
  Vue.component('kid-header', KidHeader)
  Vue.component('kid-body', KidBody)
  Vue.component('kid-footer', KidFooter)

  Vue.component('kid-search-one', KidSearchOne)
//   Vue.component('kid-search-one', (resolve, reject) => {
//     require(['../app/common/components/diyForm/searchOne/searchOne.vue'], resolve);
//   })
}
