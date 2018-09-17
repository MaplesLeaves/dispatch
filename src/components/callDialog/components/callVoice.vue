<template>
  <!-- 语音呼入 -->
  <div class="callVoice">
    <div>
      <span>
        <svg-icon name='userInfob' size='30' color='white'></svg-icon>
      </span>
      <div>
        <strong>{{message.name}}</strong>
        <p>{{message.id}} &nbsp &nbsp {{message.address}}</p>
      </div>
    </div>
    <div>
      
      <svg-icon name='voiceCalls' v-if="type === 'voice'" size='80' color='#666666'></svg-icon>
      <svg-icon name='camera' v-else size='80' color='#666666'></svg-icon>
      <p v-if="type === voice">邀请你语音通话</p>
      <p v-else>邀请你视频通话</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'callVoice',
  data () {
    return {
      message:{
        name: '张敏',
        address:'西安市北大街',
        id: '12345'
      }
    }
  },
  props: {
    type: {
      type: String,
      default () {
        return 'voice'
      }
    }
  }
}
</script>

<style lang='less'>
.callVoice {
  &>div{
    margin-bottom:10px; 
  }
  &>div:nth-child(1){
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &>div{
      text-align: left;
      margin-left: 20px;
      &>strong{
        margin-bottom: 5px;
        font-size: 18px;
        display: inline-block;
      }
    }
    &>span{
      display: inline-block;
      padding: 15px;
      border-radius: 50%;
      background: #0b76bf
    }
  }
  &>div:nth-child(2){
    text-align: center;
    &>span{
      display: inline-block;
      margin-bottom: 10px;
    }
  }
}
</style>
