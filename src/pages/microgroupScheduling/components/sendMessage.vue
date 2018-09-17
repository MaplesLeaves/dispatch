<template>
    <div class="message">
      <ul>
        <!-- <li v-for="(message, index) in data" :key="message.ctime"> -->
        <li>
          <p class="time">顶顶顶顶</p>
          
          <div class="main">
            <!-- 图标  -->
              <span class="iconb">
                  <svg-icon name='userInfob' size='34'></svg-icon>
              </span>
              <div class="countMessage">事件发生地点人群数量巨大，秩序混乱，需要增派警力事件发生地点人群数量巨大，秩序混乱，需要增派警力事件发生地点人群数量巨大，秩序混乱，需要增派警力</div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: "sendMessage",
  props: {
    data: {
        type: Array
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.message{
  width: 1286px;
  .main{
    display:flex;
    span.iconb{
      position: relative;
      background-color: #25A3F5;
      border-radius: 50%;
      padding: 12px;
      &::after{
        content: "张超阳";
          position: absolute;
          top: 67px;
          left: 0;
          width: 42px;
          font-size: 14px;
      }
    }
    .countMessage{
        background: #ffffff;
        line-height: 30px;
        font-size: 18px;
        border-radius: 4px;
        max-width: 74%;
        margin-left: 15px;
        position: relative;
        box-shadow: 0px 0px 4px #eaeaea;
        &::after{
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
