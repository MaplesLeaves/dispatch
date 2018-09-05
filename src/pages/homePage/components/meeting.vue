<template>
  <div class="meeting">
    <div class="title">
      <span>语音视频调度</span>
      <span>已选8人</span>
    </div>
    <div class="header">
      <p>会议主题</p>
      <el-input size="mini" placeholder="请输入....."></el-input>
      <div>
        <span >
          <svg-icon name='microphone' size='18' color='#666'></svg-icon>
        </span>
        <el-switch v-model='type' active-text="" inactive-text="全场发言" active-value="100" inactive-value="0">
        </el-switch>
      </div>
    </div>
    <div class="list">
      <ul>
        <li>
          <span>张三</span>
          <span></span>
          <span>15094052916</span>
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
	data() {
		return {
			type: '',
		}
	},
	methods: {
		go() {},
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
