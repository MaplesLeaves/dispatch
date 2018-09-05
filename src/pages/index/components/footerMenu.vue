<template>
  <div class="footerMenu">
    <div class="left">
      <div>所属单位：</div>
      <div>IP地址：</div> 
    </div>
    <div class="right">
      通信状态：
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'footerMenu'
}
</script>
<style lang='less'>
  .footerMenu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F4F5F6;
    &>div{
      margin:10px 20px;
    }
    &>.left{
      div{
        display: inline-block;
        margin-right: 20px;
      }
    }
  }
</style>
