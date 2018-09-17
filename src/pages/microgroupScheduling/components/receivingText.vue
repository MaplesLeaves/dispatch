<template>
    <div class="receivingText">
        <div class="user">
            <span class="iconb">
                <svg-icon name='userInfob' size='34'></svg-icon>
            </span>
            <span class="username">张朝阳</span>
        </div>
        <div class="userMsg">
            <div class="receivingMsg">
                <i class="triangleArrow"></i>
                <span class="receivingCount">指挥中心，事件发生地点人群数量巨大，秩序混乱，需要增派人手，加大警力疏散人群，再对事件发生的大楼进行封锁，先采取灭火措施，将受困人群解救出来，再安排医疗队对伤员进行抢救。请指挥中心通知相关单位。最新的应急预案已经发至群中，请大家及时下载，有什么好的建议意见请及时与我沟通，谢谢！</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "receivingText",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.receivingText {
  display: flex;
  justify-content: flex-start;
  .user {
    width: 56px;
    height: 81px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    .iconb {
      height: 34px;
      line-height: 34px;
      width: 34px;
      padding: 11px;
      text-align: center;
      background-color: #29a2f5;
      border-radius: 50%;
    }
    .username {
      font-size: 14px;
    }
  }
  .userMsg {
    padding-left: 28px;
    .receivingMsg {
      position: relative;
      max-width: 1007px;
      padding: 9px 23px;
      background-color: #fff;
      box-shadow: 0px 0px 4px #eaeaea;
      border-radius: 4px;
      .receivingCount {
        font-size: 18px;
        line-height: 30px;
      }
      i.triangleArrow {
        height: 0;
        width: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 12px solid #fff;
        position: absolute;
        top: 13px;
        left: -12px;
      }
    }
  }
}
</style>

