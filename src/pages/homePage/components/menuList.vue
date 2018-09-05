<template>
  <div class="menuList">
    <div class="title">
      <span>通话记录</span>
      <span>微群消息</span>
    </div>
    <ul>
      <li >
        <div><span>丰汇分局</span><span>昨天</span></div>
        <div><span>15094052915</span><span>2分12秒</span></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
	name: 'menuList',
}
</script>
<style lang='less'>
  .menuList{
    height: 100%;
    background: white;
    &>.title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>span{
        text-align: center;
        width: 50%;
        background: skyblue;
        padding: 5px 0;
        color: white;
      }
    }
    &>ul{
      height: calc(~'100% - 31px');
      padding: 0 15px;
      &>li{
        &>div{
          display: flex;
          justify-content: space-between;
        }
        padding: 5px 0;
        border-bottom: 1px solid #EAEAEA;
      }
    }
  }
</style>
