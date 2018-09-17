<template>
  <div class="audioVideoDisPacth">
    <div class="left">
      <div v-for="(item,index) in 9" :key='index'>
        <video src="../../assets/video/alarm.mp4" controls="controls" style="width: 100%;height: 100%;object-fit: fill"></video>
      </div>
    </div>
    <div class="right">
      <div class="userInfo">
				<user-info></user-info>
			</div>
      <div class="userMessage">
				<div>
				</div>
				<message></message>
			</div>
      <div class="userSubmit">
				<user-submit></user-submit>
			</div>
    </div>
  </div>
  </div>
</template>

<script>
import audioChild from './components/audioChild.vue'
import userInfo from './components/userInfo.vue'
import userSubmit from './components/userSubmit.vue'
import message from '../microgroupScheduling/components/message.vue'
export default {
	name: 'audioVideoDisPacth',
	data() {
		return {}
	},
	components: {
		audioChild,
		userInfo,
		message,
		userSubmit
	},
}
</script>

<style lang='less' scoped>
.audioVideoDisPacth {
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
      border:1px solid white;
      background: black;
      box-sizing: border-box;
    }
	}
	& > .right {
		width: 330px;
		height: 100%;
		& > .userInfo {
      height: 25%;
		}
		& > .userMessage {
			height: 50%;
			&>.message{
				background: #F6FAFF
			}
		}
		& > .userSubmit {
			height: 25%;
			background: white;
		}
	}
}
</style>
