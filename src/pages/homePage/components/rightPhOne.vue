<template>
  <div class="rightPhone">
    <div v-show="!isShow"><menu-btn @serchUser='serchUser'></menu-btn></div>
    <div v-show="!isShow"><menu-list></menu-list></div>
    <div v-show="!isShow">
      
      
      <menu-num></menu-num>
      
      </div>
    <transition name="el-zoom-in-bottom">
        <!-- 语音调度组件 -->
        <!-- <voice-right v-show="isShow" @close='isShow = false' class="transition-box"></voice-right> -->
        <!-- 音频调度组件 -->
        <!-- <voice-right v-show="isShow" @close='isShow = false' class="transition-box"></voice-right> -->
        <!-- 短信呢调度 -->
        <!-- <voice-right v-show="isShow" @close='isShow = false' class="transition-box"></voice-right> -->
        <!-- 微群调度组件 多个搜素框 -->
        <!-- <voice-right v-show="isShow" @close='isShow = false' class="transition-box"></voice-right> -->
        <!-- 语音呢会议调度 已经完成 搜索框 —— 全场发言开关 -->
        
        <!-- <meeting-list  v-show="isShow" @close='isShow = false' class="transition-box"></meeting-list> -->

        <!-- 音频会议 同上 -->
        <meeting-list  v-show="isShow" @close='isShow = false' class="transition-box" :closePath="data"></meeting-list>

    </transition>
  </div>
</template>
<script>
import menuBtn from './menuBtn.vue'
import menuList from './menuList.vue'
import menuNum from './menuNum.vue'
import meetingList from './meeting.vue'
import voiceRight from './voiceRight.vue'
export default {
	name: 'rightPhone',
	components: {
		menuBtn,
		menuList,
    menuNum,
    meetingList,
    voiceRight
  },
  data () {
    return {
      isShow: false,
      data:'',
    }
  },
  methods: {
    serchUser (data){ // 点击所选择的btn名称
     this.isShow = data.icon
     this.data   = data
    }
  }
}
</script>

<style lang='less'>
.rightPhone {
  height: 100%;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  &>div:nth-child(1){
    height: 30%;
    width: 100%;
  }
  &>div:nth-child(2){
    height: 33%;
    width: 100%;
  }
  &>div:nth-child(3){
    height: 37%;
    width: 100%;
  }
}
</style>
