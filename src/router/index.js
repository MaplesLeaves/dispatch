import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => { require(['@/pages/login.vue'], resolve) },
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => { require(['@/pages/index/index.vue'], resolve) },
      children: [
        {
          path: '/homePage',
          name: 'homePage',
          component: resolve => { require(['@/pages/homePage/homePage.vue'], resolve) },
        },
        {
          path: '/smsScheduling',
          name: 'smsScheduling',
          component: resolve => { require(['@/pages/smsScheduling/smsScheduling.vue'], resolve) },
        },
        {
          path: '/scheduling',
          name: 'scheduling',
          component: resolve => { require(['@/pages/scheduling/voiceConference.vue'], resolve) },
        },
      ]
    }
  ]
})
