<template>
  <div class="meetingManagement">
    <div class="left">
      <div>当前会议</div>
      <div>历史会议</div>
    </div>
    <div class="right">
      <history-list></history-list> 
    </div>
  </div>
</template>

<script>
import historyList from './components/historyList.vue'
export default {
  name:'meetingManagement',
  components:{
    historyList
  }
}
</script>

<style lang='less'>
  .meetingManagement{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>.left{
      width: 239px;
      height: 100%;
      background: #0B76BF;
      text-align: center;
      border: 1px solid transparent;
      &>div{
        width: 75%;
        color: #0B76BF;
        background: white;
        padding: 10px;
        margin: 0 auto;
        margin-top: 20px;
        border-radius: 5px;
      }
    }
    &>.right{
      margin: 10px;
      width: calc(~'100% - 249px');
      height: calc(~'100% - 20px');
    }
  }
</style>
