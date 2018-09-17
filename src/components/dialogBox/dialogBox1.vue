<template>
  <div id="dialogBox">
    <div class="dialogContent">
      <div class="contentHeader">
        <span class="userInfob">
          <svg-icon name='userInfob' style=" stroke: white; fill: white;" size='76'></svg-icon>
        </span>
      </div>
      <div class="contentMain">
        <div>12345678</div>
        <div>未知&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陕西西安</div>
        <div>电话呼入</div>
      </div>
      <footer-btn class="positionBtn"></footer-btn> 
    </div>
  </div>
</template>
<script>
import footerBtn from "./components/footerBtn.vue"
export default {
  components:{
    footerBtn,
  }
}
</script>
<style lang="less" scoped>
  #dialogBox{
    height: 100%;
    width: 100%;
    background:rgba(0,0,0,.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 888;
    display: flex;
    cursor: pointer;
    .dialogContent{
      width: 500px;
      height: 580px;
      margin: auto;
      background-color: #fff;
      border-radius: 10px;
      position: relative;
      z-index: 999;
      .contentHeader{
         display: flex;
         justify-content: space-between;
         margin-top: 76px;
         margin-bottom: 53px;
        &>span{
          background-color: #0B76BF;
          display: inline-block;
          border-radius: 50%;
          padding: 37px;
          margin: auto;
        }
      }
      .positionBtn{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
        }
      .contentMain{
        display: flex;
        flex-direction: column;
        align-items: center;
        div:nth-child(1){
         font-size: 36px;
       }
        div:nth-child(2){
         font-size: 24px;
         margin-top: 41px;
         margin-bottom: 26px;
       }
        div:nth-child(3){
         font-size: 24px;
         color: #E64135;

       }
      }
    }
  }
</style>
