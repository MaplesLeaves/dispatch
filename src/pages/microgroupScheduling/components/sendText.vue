<template>
 <!-- <div class="sendText">
                    
    <div class="userMsg">
        <div class="receivingMsg">
            <i class="triangleArrow"></i>
            <span class="receivingCount">事件发生地点人群数量巨大，秩序混乱，需要增派警力!</span>
            </div>
    </div>
        <div class="user">
        <span class="iconb">
            <svg-icon name='userInfob' size='34'></svg-icon>
        </span>
        <span class="username">张朝阳</span>
    </div> 
  </div> -->
</template>

<script>
export default {
  name: "sendText",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.sendText {
  display: flex;
  justify-content: flex-end;
  margin-top: 23px;
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
    padding-right: 28px;
    .receivingMsg {
      position: relative;
      max-width: 1007px;
      padding: 15px 23px;
      background-color: #d7edfb;
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
        border-left: 12px solid #d7edfb;
        position: absolute;
        top: 13px;
        right: -12px;
      }
    }
  }
}
</style>

