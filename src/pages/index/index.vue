<template>
  <div class="index">
     <header-top></header-top>
     <tab-page></tab-page>
     <div class="content">
       <router-view/>

     </div>
     <footer-menu></footer-menu>
  </div>
</template>

<script>
import footerMenu from './components/footerMenu.vue'
import headerTop from './components/headerTop.vue'
import tabPage from './components/tabPage.vue'
export default {
  name: 'index',
  components:{
    footerMenu,
    headerTop,
    tabPage
  }
}
</script>

<style lang='less'>
  .index{
    height: 100%;
    &>.content{
      height: calc(~'100% - 153px');
      position: relative;
      background: #F4F5F6
    }
  }
</style>  
