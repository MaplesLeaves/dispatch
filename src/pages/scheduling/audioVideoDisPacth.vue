<template>
	<div class="audioVideoDisPacth">
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
				<div v-for="(item,index) in 9" :key='index'>
					<video src="../../assets/video/alarm.mp4" controls="controls" style="width: 100%;height: 100%;object-fit: fill"></video>
				</div>
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
		userSubmit,
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
			height: calc(~'100% - 50px');
			background: white;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			& > div {
				width: 33.33%;
				height: 33.33%;
				border: 1px solid white;
				background: black;
				box-sizing: border-box;
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
			& > .message {
				background: #f6faff;
			}
		}
		& > .userSubmit {
			height: 25%;
			background: white;
		}
	}
}
</style>
