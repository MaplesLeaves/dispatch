<template>
  <div class="contentFooter">
    <button class="refuseBtn">接听</button>
    <button class="answerBtn">拒绝</button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
 .contentFooter{
   padding: 53px 51px 51px;
   display: flex;
   justify-content: space-between;
   &>button{
     width: 160px;
     height: 54px;
     border-radius: 10px;
     outline: none;
     color: #fff;
     font-size: 24px;
     border:none;
     cursor: pointer;
   }
   .refuseBtn{
     background-color: #009900;
   }
   .answerBtn{
     background-color: #F35A56;
   }
 }
</style>
