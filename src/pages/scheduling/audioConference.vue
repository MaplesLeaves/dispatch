<template>
  <div class="audioConference">
		<!-- 语音调度 -->
    <div class="left">
      <div class="title">
        <div class="left">
          主题：
          <span>918重大逃逸案</span>
        </div>
        <div class="right">
          <div>
            共参与：
            <span>15</span>人
          </div>
          <div>
            已参与：
            <span>15</span>人
          </div>
          <div>
            未参与：
            <span>15</span>人
          </div>
          <div>
            <el-button size='mini' type="primary">
              邀请成员
            </el-button>
          </div>
          <div>
            <svg-icon name='screenThree' size='20'></svg-icon>
          </div>
        </div>
      </div>
      <div class="content">
        <audio-child v-for="(item, index) in 10 " :key="index" class="userChild"></audio-child>
      </div>
    </div>
    <div class="right">
      <div class="userInfo">
				<user-info></user-info>
			</div>
			
      <div class="userMessage">
				<div></div>
				<message></message>
			</div>
      <div class="userSubmit">
				<user-submit></user-submit>
			</div>
    </div>
		<!-- <call-dialog @error='error' width='430px'>
			<mass-message></mass-message>
		</call-dialog> -->
  </div>
</template>

<script>
import audioChild from './components/audioChild.vue'
import userInfo from './components/userInfo.vue'
import userSubmit from './components/userSubmit.vue'
import message from '../microgroupScheduling/components/message.vue'
export default {
	name: 'audioConference',
	data() {
		return {
			centerDialogVisible:true
		}
	},
	components: {
		audioChild,
		userInfo,
		message,
		userSubmit
	},
	methods: {
		error (data) {
			data = false
		}
	}
}
</script>
<style lang='less'>
.audioConference {
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
		& > .title {
			display: flex;
			justify-content: space-between;
			padding: 10px;
			border: 1px solid #eaeaea;
			.right {
				& > div {
					display: inline-block;
				}
			}
		}
		& > .content {
			padding: 10px;
			& > .userChild {
				display: inline-block;
				width: 14.7%;
				margin-right: 15px;
				margin-bottom: 15px;
			}
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
