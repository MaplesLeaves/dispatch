<template>
  <div class="smsSchedulingPage">
    <div class="left">
      <ul>
        <li>发送短信</li>
        <li>发送记录</li>
        <li>常用语录</li>
        <li>签名设置</li>
      </ul>
    </div>
    <div class="content">
      <div class="contentWrap">
        <div class="smsTop">
          <div class="recipient">收信人:</div>
          <div class="userInfo">
            <div class="user">
              <div class="userTop">
                <div>张阳阳</div>
                <span>分局局长</span>
              </div>
              <div class="userBottom">
                <div class="icon">x</div>
                <div class="iphone">0323005</div>
              </div>
              <div class="close">x</div>
            </div>
            <div class="user">
              <div class="userTop">
                <div>张阳阳</div>
                <span>分局局长</span>
              </div>
              <div class="userBottom">
                <div class="icon">x</div>
                <div class="iphone">0323005</div>
              </div>
              <div class="close">x</div>
            </div>
            <div class="user">
              <div class="userTop">
                <div>张阳阳</div>
                <span>分局局长</span>
              </div>
              <div class="userBottom">
                <div class="icon">x</div>
                <div class="iphone">0323005</div>
              </div>
              <div class="close">x</div>
            </div>
          </div>
        </div>
        <div class="userCount">
          <div class="userNumber">
            已选<span> 20 </span>人,您还可以选择 <span> 70 </span> 人
          </div>
          <div class="inviteBtn">邀请成员</div>
        </div>

        <div class="smsCount">
          <div class="smsCountInner">短信内容:</div>
          <div class="message">
            已经吊牌警员，请注意......
            <div class="messageTip">
              <div class="insert">插入常用语句</div>
              <div class="clear">清空</div>
              <div class="insertInner">
                <div class="messageList active">希望各部门工作</div>
                <div class="messageList">希望各部门工作</div>
                <div class="messageList">希望各部门工作</div>
                <div class="messageList">希望各部门工作</div>
                <div class="arrowCenterTop"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
  .smsSchedulingPage{
    height: 100%;
    display: flex;
    justify-content: space-between;
    &>.left{
      width: 270px;
      background-color: #0376c1;
    }
    &>.content{
      width: 100%;
      background-color: #F8F8F8; 
      &>.contentWrap{
        background-color: #fff;
        height: 100%;
        padding-right: 10px;
        &>.smsTop{
          height: 40%;
          display: flex;
          &>.recipient{
            width: 10%;
            height: 100%;
            text-align: right;
            padding-right: 20px;
          }
          &>.userInfo{
            width: 90%;
            position: relative;
            display: inline-block;
            padding: 15px 15px 15px 15px;
            background-color: #F8F8F8;
            &>.user{
              background-color: #D7EDFB;
              width: 16%;
              display: flex;
              align-items: center;
              display: inline-block;
              border-radius: 5px;
              position: relative;
              margin-left: 10px;
              padding: 10px;
              &>.userTop{
                display: inline-block;
                display: flex;
                line-height: 24px;
              }
              &>.userTop>span{
                font-size: 12px;
                margin-left: 10px;
              }
              &>.userBottom{
                display: flex;
                line-height: 24px;
                &>.icon{
                  margin-right: 10px;
                }
                &>.iphone{
                  color:#8D8F91
                }
              }
              &>.close{
                position: absolute;
                right: -10px;
                top: -10px;
                height: 26px;
                width: 26px;
                background-color: rgba(0, 0, 0, 0.6);
                text-align: center;
                vertical-align: top;
                border-radius: 50%;
                color: #fff;
              }
            }
          }
        }
        &>.userCount{
          height: 60px;
          text-align: right;
          color: #666666;
          &>.userNumber{
            line-height: 60px;
            display: inline-block;
            &> span:nth-child(1) {
              color:#000000;
            }
             &> span:nth-child(2) {
              color:#F35955;
            }
          }
          &>.inviteBtn{
            height: 40px;
            width: 120px;
            background-color: #0376C1;
            display: inline-block;
            vertical-align: middle;
            color: #ffffff;
            text-align: right;
            line-height: 40px;
            padding: 5px;
            border-radius: 5px;
          }
        }
        &>.smsCount{
          display: flex;
          height: 20%;
          margin-top: 5px;
          
          &>.smsCountInner{
            width: 10%;
            height: 100%;
            text-align: right;
            padding-right: 20px;
          }
          &>.message{
            width: 100%;
            position: relative;
            padding: 15px 15px 15px 15px;
            background-color: #f8f8f8;
           
            &>.messageTip{
              position: absolute;
              right: 0;
              bottom: 0;
              height: 40px;
              &>.insert{
                color: #0376C1;
                display: inline-block;
                width: 166px;
                text-align: center;
              }
              &>.clear{
                color: #F47471;
                display: inline-block;
                padding-right: 20px;
              }
              &>.insertInner{
                position: absolute;
                width: 160px;
                right: 40px;
                top: 60px;
                padding: 10px;
                box-shadow: 4px 2px 2px #F2F2F2;
                background-color: #F6FAFF;
                &>.messageList{
                  line-height: 24px;
                  font-size: 16px;
                }
                &>.messageList.active{
                  color: #0376C1;
                }
                &::after{
                  content: '';
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  border-top: 2px solid #F2F2F2;
                  border-right: 2px solid #F2F2F2;
                  background-color: #F6FAFF;
                  transform: rotate(-45deg);
                 // -webkit-transform: rotate(-45deg);
                  position: absolute;
                  top: -8px;
                  left: 50%;
                  margin-left: -6px;
                }
              }
            }
          }
        }
      }
    }    
  }

</style>
