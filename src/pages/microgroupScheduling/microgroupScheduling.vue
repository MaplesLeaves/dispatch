<template>
  <div class="microgroupScheduling">
    <div class="left">
      <left-list></left-list>
    </div>
    <div class="content">
      <div class="title">
        815大型踩踏事件（20）
      </div>
      <message class="message"></message>
      <message-submit class="messageSubmit"></message-submit>
    </div>
    <div class="right">
      <right-list></right-list>
    </div>
  </div>
</template>

<script>
import message from './components/message.vue'
import messageSubmit from './components/messageSubmit.vue'
import rightList from './components/rightList.vue'
import leftList from './components/leftList.vue'
export default {
  name: 'microgroupScheduling',
  components: {
    message,
    messageSubmit,
    rightList,
    leftList
  }
}
</script>

<style lang='less'>
.microgroupScheduling {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: #F8F8F8;
	&>.left {
    width: 305px;
    height: 100%;
    background: #0B76BF;
	}
	&>.content {
    height: 98%;
    width: calc(~"100% - 620px");
    box-sizing: border-box;
    background: white;
    position: relative;
    &>.message{
      height: calc(~"100% - 280px");
      margin: 10px;
    }
    &>.messageSubmit{
      height: 250px;
    }
	}
	&>.right {
    width: 300px;
    height: 100%;
	}
}
</style>
