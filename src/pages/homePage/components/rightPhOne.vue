<template>
  <div class="rightPhone">
    <div v-show="!isShow"><menu-btn @serchUser='serchUser'></menu-btn></div>
    <div v-show="!isShow"><menu-list></menu-list></div>
    <div v-show="!isShow"><menu-num></menu-num></div>
    <transition name="el-zoom-in-bottom">
        <meeting-list v-show="isShow" @close='isShow = false' class="transition-box"></meeting-list>
      </transition>
  </div>
</template>
<script>
import menuBtn from './menuBtn.vue'
import menuList from './menuList.vue'
import menuNum from './menuNum.vue'
import meetingList from './meeting.vue'
export default {
	name: 'rightPhone',
	components: {
		menuBtn,
		menuList,
    menuNum,
    meetingList
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    serchUser (data){ // 点击所选择的btn名称
     this.isShow = true 
     console.error(data)
    },
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
