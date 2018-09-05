// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill' // 引入代买转换  兼容ie浏览器
import SvgIcon from '@/components/SvgIconTip'
import '../static/ztree/js/jquery.ztree.core.min' 
import '../static/ztree/js/jquery.ztree.excheck.min' 
import '../static/ztree/css/zTreeStyle.css' 
import 'jquery'
import store from './store'
Vue.component('svg-icon', SvgIcon)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
