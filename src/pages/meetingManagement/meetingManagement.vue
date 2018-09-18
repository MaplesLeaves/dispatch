<template>
  <div class="meetingManagement">
    <div class="left">
      <div :class="{serch: isSerch}" @click="serchItem(true)">当前会议</div>
      <div :class="{serch: !isSerch}" @click="serchItem(false)">历史会议</div>
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
  },
  data () {
    return {
      isSerch: false
    }
  },
  methods:{
    serchItem (data) {
      this.isSerch = data
    } 
  }
}
</script>

<style lang='less'>
  .meetingManagement{
    height: 100%;
    display: flex;
    justify-content: space-between;
align-items: flex-end;    
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
      &>.serch{
        background: #024B7B;
        color: white
      }
    }
    &>.right{
      margin: 10px 10px 0 10px;
      width: calc(~'100% - 249px');
      height: calc(~'100% - 10px');
      background: white
    }
  }
</style>
