<template>
  <div class="smsScheduling">
    <div class="smsLeft">
      <smsLeft/>
    </div>
    <div class="smsContent">
      <!-- <div class="recipient">
        <div class="recipientTitle">收信人</div>
        <div class="recipientUser">
          <div class="userInfo el-icon-error" v-for="(item,index) in userList" :key="item.id">
            <div class="userTop">
              <div>张阳阳</div>
              <span>分局局长</span>
            </div>
            <div class="userBottom">
              <div class="icon">
                <svg-icon name='smsPhone' size='22'></svg-icon>
              </div>
              <div class="iphone">0323005</div>
            </div>
          </div>
        </div>
      </div>
      <div class="inviteSelect" >
          <div class="userNumber">
            已选<span> 20 </span>人,您还可以选择 <span> 70 </span> 人
          </div>
          <div class="inviteBtn">
            <el-button type="primary" class="sendBtn">主要按钮</el-button>
          </div>
      </div>
     <div class="send">
        <div class="sendTile">短信内容</div>
        <div class="sendMain">
          <el-input
            type="textarea"
            :autosize="{ minRows: 6, maxRows: 8}"
            placeholder="请输入内容"
            resize="none"
            v-model="textarea3">
          </el-input>
          <div class="inpuSlecte">
            <div class="insert">
              <span class="icon">
                <svg-icon name='smsTermActive' size='22'></svg-icon>
              </span>
              <div class="term">
                <span>常用语</span>
                <div class="termPop">
                  <popupList/>
                </div>
              </div>
              
            </div>
            <div class="clearInput">清空</div>
          </div>
          <div class="inputTitle">
            
              <el-checkbox label="启用签名" v-model="checked"></el-checkbox>
              <el-checkbox label="定时发送"></el-checkbox>
              <el-date-picker
                style="margin-left:20px;"
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
               <div class="insertInner">
                <popupList/>
              </div>
              
          </div>
          <el-button type="primary" class="sendBtn">主要按钮</el-button>
        </div>
      </div> -->
      <router-view/>
    </div>

  </div>
</template>
<script>
import smsLeft from './components/smsLeft.vue'
export default {
	name: 'smsScheduling',
	components: {
		smsLeft,
	},
	data() {
		return {}
	},
}
</script>
<style lang="less" scoped>
.smsScheduling {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	.smsContent {
		width: calc(100% - 259px);
		background-color: #ffffff;
		margin: 10px;
		padding: 10px;
		box-sizing: border-box;
		//  .recipient{
		//    height: 40%;
		//    display: flex;
		//    .recipientTitle{
		//      height: 100%;
		//      width: 8%;
		//      text-align: right;
		//      margin-right: 20px;
		//      margin-top: 6px;
		//      font-size: 16px;
		//    }
		//    .recipientUser{
		//       width: 90%;
		//       background-color:#F8F8F8;
		//       padding: 10px 7px 0 17px;

		//       overflow-y: auto;
		//      .userInfo{
		//        display: inline-block;
		//        width:172px;
		//        height:54px;
		//        background-color: aqua;
		//        border-radius: 4px;
		//        margin:6px;
		//        padding: 6px 12px 6px 16px;
		//        position: relative;
		//        &.el-icon-error:before{
		//           content: "\E62C";
		//           position: absolute;
		//           font-size: 22px;
		//           right: -4px;
		//           top: -4px;
		//        }
		//        .userTop{
		//          margin-top:2px;
		//          line-height: 22px;
		//          &>div{
		//            font-size: 18px;
		//            display: inline-block;
		//          }
		//          &>span{
		//            font-size: 14px;
		//            padding-left: 10px;
		//            display: inline-block;
		//          }
		//        }
		//        .userBottom{
		//          margin-top:7px;
		//          .icon{
		//            display: inline-block;
		//             width: 16px;
		//             height: 18px;
		//             margin-left: -4px;
		//             vertical-align: top;
		//          }
		//          .iphone{
		//            display: inline-block;
		//            color: #666666;
		//            font-size: 16px;
		//            line-height: 22px;
		//            padding-left: 4px;
		//          }
		//        }
		//      }
		//    }
		//  }
		//  .inviteSelect{
		//         height: 8%;
		//         text-align: right;
		//         color: #666666;
		//         &>.userNumber{
		//           line-height: 64px;
		//           display: inline-block;
		//           margin-right: 5px;
		//           &> span:nth-child(1) {
		//             color:#000000;
		//           }
		//            &> span:nth-child(2) {
		//             color:#F35955;
		//           }
		//         }
		//         &>.inviteBtn{
		//           display: inline-block;
		//           cursor: pointer;
		//           &>.icon{
		//             margin-left:-10px;
		//           }
		//         }
		//       }

		//  .send{
		//    height: 48%;
		//    background: #fff;
		//    display: flex;
		//    .sendTile{

		//      height: 100%;
		//      width: 8%;
		//      text-align: right;
		//      margin-right: 20px;
		//      margin-top: 6px;
		//      font-size: 16px;
		//    }
		//    .sendMain{
		//      width: 90%;
		//      background-color:#ffffff;
		//       position: relative;
		//      .inpuSlecte{
		//        display: flex;
		//        justify-content: flex-end;
		//        padding-right: 22px;
		//        position: relative;
		//        top: 2%;
		//        .insert{
		//          height: 19px;
		//          display: flex;
		//          .term{
		//            position: relative;
		//          }
		//          .termPop{
		//            position: absolute;
		//            left: -50px;
		//            top: 30px;
		//            width: 150px;
		//            height: 300px;
		//            z-index: 999;
		//          }
		//          &>div{
		//            padding-left: 8px;
		//            padding-right: 21px;
		//            color: #0B76BF;
		//            font-size: 14px;
		//            cursor: pointer;
		//            position: relative;
		//          }
		//        }
		//        .clearInput{
		//          color: #F35A56;
		//          font-size: 14px;
		//          cursor: pointer;
		//        }
		//      }
		//      .inputTitle{
		//        line-height: 60px;
		//        position: relative;
		//       .insertInner{
		//           position: absolute;
		//           left: -10px;
		//           top: 60px;
		//         }
		//      }
		//      .sendBtn{
		//        position: absolute;
		//        left: 40%;
		//        transform: translateX(-50%);
		//        bottom: 0;
		//      }
		//    }
		//  }
  }
  
}
</style>
