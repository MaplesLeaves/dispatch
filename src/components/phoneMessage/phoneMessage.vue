<template>
  <div class="phoneMessage" v-if="getCallNow">
      <div>
        <svg-icon name='userInfob' size='30' color='gray'></svg-icon>
      </div>
      <div>
        <!-- {{messageName}} -->
        张敏
      </div>
      <div>
        <p>1594052913</p>
        <p>西安市北大街ddddddddddddddddddddddddddddddddddddddd</p>
      </div>
      <div>
        5:12
      </div>
      <div>
        <!--  -->
        <span @click="close">
            <svg-icon name='deletePhone' size='25'></svg-icon>
        </span>
      </div>
      <div class="rightMessage">
        话路信息
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'phoneMessage',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getCallNow'
    ])
  },  
  methods: {
    close () {
      // console.error(this.$store.getters.getCallNow)
      this.$store.commit('CALLNOW',false)
    }
  }
}
</script>

<style lang='less'>
  .phoneMessage{
    background: #0B76BF;
    text-align: center;
    height: 100%;
    position: relative;
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    color: white;
    padding: 20px 0;
    box-sizing: border-box;
    &>div:nth-child(1){
      display: inline-block;
      padding: 15px;
      border-radius: 50%;
      background: white;
      width: 30px;
      margin: 0 auto;
    }
    &>div:nth-child(2){
      width: 100%;
    }
    &>div:nth-child(3){
      width:100%;
      display: flex;
      justify-content: space-around;
      &>p{
        width: 40%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
      }
    }
    &>div:nth-child(4){
      width:100%;
    }
    &>div:nth-child(5){
      width:100%;
      &>span{
        display: inline-block;
        padding: 3px 25px;
        border-radius: 3px;
        background: #F35A56
      }
    }
    &>.rightMessage{
      position: absolute;
      right: 5px;
      top: 5px;
      background: white;
      color:#0B76BF;
      padding: 5px;
      font-size: 14px;
      border-radius: 3px;
    }
  }
</style>
