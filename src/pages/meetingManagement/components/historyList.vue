<template>
  <div class="historyList">
    <div v-for="(item,index) in 10" :v-for="10">
      <div>
        <span>Icon</span>
        <div>
          <p>会议主题：918大事件</p>
          <p>发起人： 张大炮 西安市公安局局长</p>
        </div>
      </div>
      <div>
      当前参会人员： 20人
      </div>
      <div>
        开始时间：2018-12-12 15:23:12
      </div>
      <div>
        <el-button size="mini">马上进入</el-button>
        <el-button size="mini">结束会议</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'historyList'
}
</script>

<style lang='less'>
  .historyList{
    padding: 10px;
    &>div{
      background: #F6FAFF;
      border:1px solid #BDE1F9;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      border-radius: 3px ;
      &>div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>div{
          margin-left: 20px;
        }
      }
    }
  }
</style>
