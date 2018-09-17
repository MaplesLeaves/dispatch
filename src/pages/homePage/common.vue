<template>
  <div class="common">
    <p>常用联系人</p>
    <div>
      <user-info class="childUser" v-for="(item,index) in 10" :key="index"></user-info>
    </div>
  </div>
</template>

<script>
import userInfo from './components/userInfo.vue'
export default {
  name: 'common',
  components: {
		userInfo,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang='less'>
  .common{
    padding: 5px 10px;
    &> p{
      margin: 10px 0;
      border-left: 5px solid #0B76BF;
      padding-left: 10px;
    }
    &>div{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .childUser{
        width: 14%;
        margin: 10px;
      }
    }
  }
</style>
