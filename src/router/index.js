import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => {
        require(['@/pages/login.vue'], resolve)
      },
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => {
        require(['@/pages/index/index.vue'], resolve)
      },
      children: [
        {
          path: '/homePage',
          name: 'homePage',
          component: resolve => {
            require(['@/pages/homePage/homePage.vue'], resolve)
          },
        },
        {
          path: '/smsScheduling',
          name: 'smsScheduling',
          component: resolve => {
            require(['@/pages/smsScheduling/smsScheduling.vue'], resolve)
          },
          children: [
            {
              path: '/sendMessage',
              name: 'sendMessage',
              component: resolve => {
                require(['@/pages/smsScheduling/components/sendMessage.vue'], resolve)
              },
            },
            {
              path: '/signature',
              name: 'signature',
              component: resolve => {
                require(['@/pages/smsScheduling/components/signature.vue'], resolve)
              },
            },
            {
              path: '/messageRecorder',
              name: 'messageRecorder',
              component: resolve => {
                require(['@/pages/smsScheduling/components/messageRecorder.vue'], resolve)
              },
            },
            {
              path: '/expressions',
              name: 'expressions',
              component: resolve => {
                require(['@/pages/smsScheduling/components/expressions.vue'], resolve)
              },
            },
          ],
        },
        {
          path: '/microgroupScheduling',
          name: 'microgroupScheduling',
          component: resolve => {
            require(['@/pages/microgroupScheduling/microgroupScheduling.vue'], resolve)
          },
        },
        {
          path: '/scheduling',
          name: 'scheduling',
          component: resolve => {
            require(['@/pages/scheduling/voiceConference.vue'], resolve)
          },
        },
        {
          path: '/audioConference',
          name: 'audioConference',
          component: resolve => {
            require(['@/pages/scheduling/audioConference.vue'], resolve)
          },
        },
        {
          path: '/audioAndVideo',
          name: 'audioAndVideo',
          component: resolve => {
            require(['@/pages/scheduling/audioAndVideo.vue'], resolve)
          },
        },
        {
          path: '/monitoringAids',
          name: 'monitoringAids',
          component: resolve => {
            require(['@/pages/homePage/monitoringAids.vue'], resolve)
          },
        },

        {
          path: '/audioVideoDisPacth',
          name: 'audioVideoDisPacth',
          component: resolve => {
            require(['@/pages/scheduling/audioVideoDisPacth.vue'], resolve)
          },
        },
        {
          path: '/monitorPage',
          name: 'monitorPage',
          component: resolve => {
            require(['@/pages/monitorPage/monitorPage.vue'], resolve)
          },
        },
        {
          path: '/communication',
          name: 'communication',
          component: resolve => {
            require(['@/pages/communication/communication.vue'], resolve)
          },
        },
        {
          path: '/meetingManagement',
          name: 'meetingManagement',
          component: resolve => {
            require(['@/pages/meetingManagement/meetingManagement.vue'], resolve)
          },
        },
      ],
    },
  ],
})
