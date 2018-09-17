<template>
	<div class="meeting">
		<div class="title">
			<span>{{closePath.name}}</span>
			<span v-text="data.choseNumber">已选8人</span>
		</div>
		<div class="header">
			<!-- 搜索框 -->
			<p v-if="isShow || closePath.path === 'voiceMessage'|| closePath.path == 'videoMessage'">会议主题</p>
			<el-input v-if="isShow || closePath.path === 'voiceMessage'|| closePath.path == 'videoMessage'|| closePath.path === 'wechat'" size="mini" placeholder="请输入....."></el-input>
			<!-- 会议发言控制 -->
			<div v-if="isShow || closePath.path == 'voiceMessage'||closePath.path == 'videoMessage'">
				<span>
					<svg-icon name='microphone' size='18' color='#666'></svg-icon>
				</span>
				<el-switch v-model='type' active-text="" inactive-text="全场发言" active-value="100" inactive-value="0">
				</el-switch>
			</div>
		</div>
		<div class="list">
			<ul>
				<li>
					<span v-text="data.username">张三</span>
					<span class="listIcon">
						<svg-icon name="callPhone" size='18'></svg-icon>
					</span>
					<span v-text="data.tel">15094052916</span>
					<i class="el-icon-error" style="color: #ccc"></i>
				</li>
				<li>
					<span v-text="data.username">张三</span>

					<span class="listIcon">
						<svg-icon name="callPhone" size='18'></svg-icon>
					</span>
					<span v-text="data.tel">15094052916</span>
					<i class="el-icon-error" style="color: #ccc"></i>
				</li>
			</ul>
		</div>
		<div class="button">
			<el-button size='mini' @click="go" type="primary">发起</el-button>
			<el-button size='mini' @click="close">取消</el-button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'meeting',
	props: ['closePath'],
	data() {
		return {
			isShow: false,
			type: '',
			data: {
				title: '语音视频调度',
				userNumber: '8',
				username: '张三',
				tel: '15009244351',
			},
		}
	},
	methods: {
		go() {
			switch (this.closePath.path) {
				case 'microphone':
					this.$router.push({
						name: 'scheduling',
					})
					break
				case 'video':
					//
					break
				case 'noteInfo':
					this.$router.push({
						name: 'smsScheduling',
					})
					break
				case 'wechat':
					this.$router.push({
						name: 'microgroupScheduling',
					})
					break
				case 'voiceMessage':
					this.$router.push({
						name: 'audioConference',
					})
					break
				case 'videoMessage':
					this.$router.push({
						name: 'audioAndVideo',
					})
					break
				default:
			}
		},
		close() {
			this.$emit('close')
		},
	},
}
</script>
<style lang='less'>
.meeting {
	height: 100%;
	width: 100%;
	position: relative;
	& > .title {
		background: #0b76bf;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		color: white;
	}
	& > .header {
		background: #f6faff;
		padding: 10px;
		.el-switch__label {
			color: #409eff;
		}
		.el-switch__label.is-active {
			color: black;
		}
	}
	& > .list {
		padding: 10px;
		background: white;
		& > ul {
			& > li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10px;
				span:nth-child(1) {
					width: 18%;
					text-align: center;
				}
				span:nth-child(2) {
					width: 10%;
				}
				span:nth-child(3) {
					width: 40%;
				}
			}
		}
	}
	.button {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		text-align: center;
		padding: 10px 0;
	}
}
</style>
