<template>
  <div class="audioAndVideo">
    <div class="left">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="right">
      <video-right></video-right>
    </div>
  </div>
</template>

<script>
import videoRight from './components/videoRight.vue'
export default {
  name: 'audioAndVideo',
  data () {
    return {
    }
  },
  components: {
    videoRight
  },
  methods: {
    
  },
  mounted () {

  }
}
</script>

<style lang='less'>
.audioAndVideo {
  padding: 10px;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	& > .left {
    width: calc(~'100% - 340px');
		height: 100%;
    background: white;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &>div{
      width: 33.33%;
      height: 33.33%;
      border:1px solid red;
      background: yellow;
      box-sizing: border-box;
    }
	}
	& > .right {
		width: 330px;
		height: 100%;
	}
}
</style>
