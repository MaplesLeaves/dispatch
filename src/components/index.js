import Vue from 'vue'
import tableList from './tableList/tableList.vue'
import callDialog from './callDialog/callDialog.vue'
import callInfo from './callDialog/components/callInfo.vue'
import callVoice from './callDialog/components/callVoice.vue'
import nowVoice from './callDialog/components/nowVoice.vue'
import massMessage from './callDialog/components/massMessage.vue'
import phoneMessage from './phoneMessage/phoneMessage.vue'
import callMessage from './callMessage/callMessage.vue'
const tableView = {
    install:function(Vue){
        Vue.component('tableList',tableList)
        Vue.component('callDialog',callDialog)
        Vue.component('callInfo',callInfo)
        Vue.component('callVoice',callVoice)
        Vue.component('nowVoice',nowVoice)
        Vue.component('massMessage',massMessage)
        Vue.component('phoneMessage',phoneMessage)
        Vue.component('callMessage',callMessage)
    }
}
export default tableView