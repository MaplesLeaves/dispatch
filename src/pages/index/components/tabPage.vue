<template>
  <div class="tabPage">
    <div><span>首页</span>
    |</div>
  </div>
</template>

<script>
export default {
  name: 'tabPage'
}
</script>

<style lang='less'>
  .tabPage{
      background-image: -webkit-linear-gradient(top, #3EA7EC, #0B76BF); 
      padding: 5px;
      color: #024B7B;
      &>div{
        display: inline-block;
        text-align: right; 
      &>span{
        display: inline-block;
        padding: 5px 20px;
        background: white;
        border-radius: 10px;
        text-align: center;
        margin-right: 10px
      }
      }
   }
</style>
