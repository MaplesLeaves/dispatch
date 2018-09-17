<template>
  <div class="communication">
    <div>
      <div v-for="(item, index) in menuList" :key='index' :class="{serchClick: num === index}">
        <svg-icon :name='item.icon' :size='50' color='white'></svg-icon>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'communication',
  data () {
    return {
      num: 0,
      menuList: [
        {
          name: '一键呼叫',
          icon: 'callInfo',
          paht: ''
        },
        {
          name: '语音调度',
          icon: 'microphone',
          paht: ''
        },
        {
          name: '音视频调度',
          icon: 'video',
          paht: ''
        },
        {
          name: '短信调度',
          icon: 'smsRecord',
          paht: ''
        },
        {
          name: '微群调度',
          icon: 'wechat',
          paht: ''
        },
        {
          name: '语音会议',
          icon: 'voice',
          paht: ''
        },
        {
          name: '音视频会议',
          icon: 'videoMessage',
          paht: ''
        },
        {
          name: 'GIS调度',
          icon: 'GisMessage',
          paht: ''
        }
      ]
    }
  }
}
</script>

<style lang='less'>
  .communication{
    height: 100%;
    background: url(./../../assets/communication.png) center center no-repeat;
    background-size: 100% 100%;;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &>div{
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
      &>div{
        margin-bottom: 25px;
        width: 23%;
        color: white;
        background: -webkit-linear-gradient(top, #5E9CE8 0%, #93C2FB 100%);
        border: 1px solid #90C2FB;
        border-radius: 10px;
        padding: 25px 0;
        &>p{
          margin-top: 15px;
        }
      }
      &>.serchClick{
        background: -webkit-linear-gradient(top, #6DA428 0%, #CBF58B 100%);
      }
    }
  }
</style>
