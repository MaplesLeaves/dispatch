<template>
  <div class="recently">
    <p>最近联系人</p>
    <div>
      <user-info class="childUser" v-for="item in 10"></user-info>
    </div>
  </div>
</template>

<script>
import userInfo from './components/userInfo.vue'
export default {
  name: 'recently',
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
  .recently{
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
