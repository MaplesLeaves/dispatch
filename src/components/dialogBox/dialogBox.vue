<template>
  <div id="dialogBox">
    <div class="dialogContent">
      <div class="contentHeader">
        <span class="userInfob">
          <svg-icon name='userInfob' style=" stroke: white; fill: white;" size='76'></svg-icon>
        </span>
        <div class="userRight">
            <div class="userName">
              张敏
            </div>
            <div class="userAdd">
              <div>6001</div>
              <div>小寨路派出所</div>
            </div>
        </div>
      </div>
      <div class="contentMain">
        <span class="calls">
          <svg-icon :name='iconVideo' size='189'></svg-icon>
        </span>
        <p>邀你语音通话</p>
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
  },
  data(){
    return{
      iconVoice:'voiceCalls',
      iconVideo:'videoCall',
    }
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
         padding: 52px 0px 27px 44px;
         &>span{
            border-radius: 50%;
            background-color: #0B76BF;
            height: 100px;
            width: 100px;
            text-align: center;
            margin-right: 24px;
         }
         .userRight{
          
           .userName{
              font-size: 32px;
           }
           .userAdd{
             display: flex;
             margin-top: 22px;
             font-size: 24px;
             div:nth-child(1){
               padding-right: 21px;
             }
           }
         }
      }
      .contentMain{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
         
        &>span{
          height: 189px;
          width: 100%;
          
          text-align: center;
         
        }
        &>p{
          font-size: 24px;
          margin-top:30px; 
        }
      }
      .positionBtn{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
        }
     
    }
    
  }
</style>
