<template>
	<div class="homePage">
		<div class="left">
			<left-tree @clickTree='getTree' @catalogue='getCatalogue'></left-tree>
		</div>
		<div class="content">
			<div v-if='catalogue'>
				<common v-if="!isShowduty"></common>
				<recently v-if="!isShowduty"></recently>
				<be-on-duty v-if="isShowduty"></be-on-duty>
				<organization v-if="isShowduty"></organization>
			</div>
			<div v-if='!catalogue'>
				<table-list :list='list' :tableTitle='tableTitle' :translate='translate'></table-list>
			</div>
		</div>
		<div class="right">
			<right-phone></right-phone>
		</div>
		<el-dialog title="提示" :visible.sync="getCloseUser.isShow" width="30%" top="18%" center>
			<div class="deletTrue">
				<div class="deletIcon">
					<span class="deletWarning">
						<svg-icon name='warningIcon' size='112'></svg-icon>
					</span>
				</div>
				<div class="isTrue">确定将
					<span class="spanBlue">张阳阳</span>
					<span class="spanBlue">分局科员</span>从常用联系人中取消</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="close">取 消</el-button>
				<el-button type="primary" @click="close">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import leftTree from './components/leftMenu.vue'
import rightPhone from './components/rightPhone.vue'
import userInfo from './components/userInfo.vue'
import organization from './organization.vue'
import common from './common.vue'
import beOnDuty from './components/beOnDuty.vue'
import recently from './recently.vue'
export default {
	name: 'homePage',
	components: {
		leftTree,
		rightPhone,
		userInfo,
		organization,
		common,
		beOnDuty,
		recently,
	},
	computed: {
		...mapGetters(['getCloseUser']),
	},
	data() {
		return {
			catalogue: true, // 通讯录状态
			isShowduty: false,
			list: [
				{
					number: '01154号',
					type: '球机',
					typeNum: 'Jk-MA0012',
					loaction: '小寨十字路口',
					content: '小寨十字路口有警情发生',
					status: '10',
					parameter: '',
					frames: '',
					playback: '',
				},
				{
					number: '01154号',
					type: '球机',
					typeNum: 'Jk-MA0012',
					loaction: '小寨十字路口',
					content: '小寨十字路口有警情发生',
					status: '10',
				},
			],
			tableTitle: [
				{
					type: 'text',
					name: '名称/编号',
					key: 'number',
					width: '100px',
				},
				{
					type: 'text',
					name: '类型',
					key: 'type',
				},
				{
					type: 'text',
					name: '设备编号',
					key: 'typeNum',
				},
				{
					type: 'text',
					name: '位置',
					key: 'loaction',
				},
				{
					type: 'text',
					name: '描述',
					key: 'content',
				},
				{
					type: 'status',
					name: '当前状态',
					key: 'status',
				},
				{
					type: 'text',
					name: '设备参数',
					key: 'parameter',
				},
				{
					type: 'text',
					name: '实时画面',
					key: 'frames',
				},
				{
					type: 'text',
					name: '回放',
					key: 'playback',
				},
			],
		}
	},
	methods: {
		getCatalogue(data) {
			// 点击通讯录
			this.catalogue = data
		},
		getTree(...data) {
			// data[0] 为点击组织树  data[1]为点击数据
			this.isShowduty = data[0]
		},
		getClick() {
			this.$router.push({
				name: 'monitorPage'
			})
		},
		translate(data, value) {
			// 资源列表数据条件选择
			if (value.key === 'parameter') {
				return {
					name: '详情',
					click: this.getClick
				}
			} else if (value.key === 'frames' || value.key === 'playback') {
				return {
					name: '查看',
					click: this.clickgo
				}
			} else if (value.key === 'status') {
				return {
					color: 'red',
					content: '完好',
				}
			}
			return data[value.key]
		},
		clickgo(data) {			
			this.$router.push({
				name:'monitoringAids'
			})
		},
		close() {
			this.$store.commit('CLOSEUSER', { isShow: false })
		},
	},
}
</script>
<style lang='less'>
.homePage {
	height: 100%;
	display: flex;
	justify-content: space-between;
	& > .left {
		width: 270px;
		background: #0b76bf;
	}
	& > .content {
		width: calc(~'100% - 570px');
		background: white;
		margin: 10px 10px 0 10px;
	}
	& > .right {
		width: 300px;
		margin: 10px 10px 0 0;
	}
}
.el-dialog__header {
	background-color: #0b76bf;
}
.el-dialog__title {
	text-align: left;
	color: #fff;
}
.deletTrue {
	.deletIcon {
		height: 112px;
		width: 112px;
		margin: 0 auto;
	}
	& > div {
		text-align: center;
		margin-top: 33px;
		.spanBlue {
			color: #0b76bf;
			padding: 0 5px;
		}
	}
}
</style>

