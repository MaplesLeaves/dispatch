<template>
  <!-- 发送记录 -->
  <div class="messageRecorder">
    <div class="top">
      <div class="left">
        <div>
          <span>开始日期：</span>
          <el-date-picker  size='mini' class='childInput' v-model="value1" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </div>
        <div>
          <span>结束日期：</span>
          <el-date-picker  size='mini' class='childInput' v-model="value2" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </div>
        <div>
          <span>接收号码：</span>
          <el-input class='childInput' size='mini' ></el-input>
        </div>
        <div>
          <span>短信内容：</span>
          <el-input class="childInput" size='mini'></el-input>
        </div>
      </div>
      <div class="right">
        <el-button size='mini'>查询</el-button>
        <el-button size='mini'>导出</el-button>
      </div>
    </div>
    <div class="content">
      <table-list :list='dataList' :tableTitle='tableList' :translate='translate'></table-list>
    </div>
  </div>
</template>
<script>
export default {
	name: 'messageRecorder',
	data() {
		return {
			value1: '',
			value2: '',
			tableList: [
				{
					type: 'text',
					key: 'name',
					name: '接收人',
				},
				{
					type: 'text',
					key: 'id',
					name: '接收编码',
				},
				{
					type: 'text',
					key: 'type',
					name: '发送类型',
				},
				{
					type: 'text',
					key: 'time',
					name: '发送时间',
				},
				{
					type: 'text',
					key: 'content',
					name: '短信内容',
				},
				{
					type: 'text',
					key: 'status',
					name: '发送状态',
				},
				{
					type: 'text',
					key: 'lastTime',
					name: '到达时间',
				},
				{
					key: 'operation',
					name: '操作',
				},
			],
			dataList: [
				{
					name: '张三',
					id: '123456',
					type: '手机',
					time: '2018-12-12 8:50:45',
					content: '已接到警力支持请尽快到达现场进行处理',
					status: '成功',
					lastTime: '2018-12-13 12:45:56',
				},
				{
					name: '张三',
					id: '123456',
					type: '手机',
					time: '2018-12-12 8:50:45',
					content: '已接到警力支持请尽快到达现场进行处理',
					status: '成功',
					lastTime: '2018-12-13 12:45:56',
				},
				{
					name: '张三',
					id: '123456',
					type: '手机',
					time: '2018-12-12 8:50:45',
					content: '已接到警力支持请尽快到达现场进行处理',
					status: '成功',
					lastTime: '2018-12-13 12:45:56',
				},
			],
		}
	},
	mounted() {},
	methods: {
		translate(data, item) {
			// console.error(data,key)
			return data[item.key]
		},
	},
}
</script>
<style lang='less'>
.messageRecorder {
	width: 100%;
	height: 100%;
	& > .top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		& > .left {
			display: flex;
			justify-content: space-between;
      align-items: center;
      width: 80%;
      &>div{
        width: 23%;
        &>.childInput{
          width: calc(~'100% - 85px')
        }
      }
      &>div:nth-child(4) {
        width: 28%;
      }
		}
	}
	& > .content {
	}
}
</style>
