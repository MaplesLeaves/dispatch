<template>
  <div class="voiceConference">
    <div class="left">
      <div class="title">
        <div class="left">
          <div>
            共参与： <span></span> 人
          </div>
          <div>已参与： <span></span> 人</div>
          <div>
            未参与： <span></span> 人
          </div>
        </div>
        <div class="right">
          <el-button size="mini">邀请成员</el-button>
        </div>
      </div>
      <div class="content">
          <user-card v-for="(item,index) in 8" :key='index' class="userChild"></user-card>
      </div>
    </div>
    <div class="right">
      <p>语音话路信息</p>
      <ul>
        <li>
          <span >
            <svg-icon name='callPhone' size='20'></svg-icon>
          </span>
          
          <p>15094052963</p>
          <span class="iconBg">
            <svg-icon name='schDial' size='20'></svg-icon>
          </span>
        </li>
        <li>
          <span>
            <svg-icon name='terminal' size='20'></svg-icon>
          </span>
          
          <p>15094052963</p>
          <span class="iconBg">
            <svg-icon name='schHang' size='20'></svg-icon>
          </span>
        </li>
      </ul>
      <div class="bottom">
      <el-button size="mini">退出</el-button>
    </div>
    </div>
  </div>
</template>

<script>
import userCard from './components/userCard.vue'
export default {
  name: 'voiceConference',
  components: {
    userCard,
  },
  data(){
    return {
      iconArrayRight:[
        {
          iconName:'schDial',

        },
        {
          iconName:'schHang'
        }
      ],
      iconArrayLeft:[
        {
          direaction:'1',
          iconName:"callPhone"
        },
        {
          
          direaction:'2',
          iconName:"terminal"
        },
        {
          direaction:'3',
          iconName:"userPhone"
        }
      ]
    }
  }
}
</script>
<style lang='less'>
  .voiceConference{
    padding: 10px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    &>.left{
      width:calc(~'100% - 340px');
      height: 100%;
      background: white;
      &>.title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border: 1px solid #EAEAEA;
        &>.left{
          &>div{
            display: inline-block;
          }
        }
      }
      &>.content{
        padding: 10px;
        &> .userChild{
          display: inline-block;
          width: 14.7%;
          margin-right: 15px;
          margin-bottom: 15px;
        }
      }
    }
    &>.right{
      width: 330px;
      height: 100%;
      background: white;
      position: relative;
      &>p{
        background: #0B76BF;
        padding: 10px 5px;
        color: white
      }
      &>ul{
        padding: 10px 10px 0 10px;
        &>li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
          &>.iconBg{
            background-color: #0B76BF;
            border-radius: 4px;
          }
          &>p{
            width: calc(~'100% - 50px')
          }
        }
      }
      &>.bottom{
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 10px 0;
      }
    }
  }
</style>
