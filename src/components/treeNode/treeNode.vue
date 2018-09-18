<template>
  <div class="treeNode">
    <ul id='tree' class="ztree txt-sm"></ul>
  </div>
</template>
<script>
export default {
	name: 'treeNode',
	data() {
		return {
			type: {
				view: {
					showIcon: true,
					nameIsHTML: true,
					showLine: true,
				},
				data: {
					simpleData: {
						enable: true,
					},
				},
				callback: {
					onClick: this.getList,
				},
			},
			message: [
				{
					id: 1,
					name: '张三',
					pid: '0',
					children: [
						{
							id: 9,
							name: '李四',
							pid: '1',
						},
					],
				},
				{
					id: 9,
					name: '李四',
					pid: '1',
				},
				{
					id: 6,
					name: '万物',
					pid: '1',
				},
			],
			messageInfo: [
				{
					id: 1,
					name: 'daffas',
					pid: '0',
					children: [
						{
							id: 9,
							name: 'dfasfda',
							pid: '1',
							
						},
					],
				},
				{
					id: 9,
					name: 'fdasf',
					pid: '1',
				},
				{
					id: 6,
					name: 'adfasf',
					pid: '1',
				},
			],
		}
	},
	methods: {
		getList(event, treeId, treeNode) {
			this.$emit('getNode',treeNode)
		},
		newTree() {
			this.message = this.messageInfo
			this.load()
		},
		load() {
			$.fn.zTree.init($('#tree'), this.type, this.message)
		},
	},
	mounted() {
		this.load()
	},
}
</script>

<style lang='less'>
.treeNode {
	height: auto;
	& > #tree {
		a {
			color: white;
		}
	}
	.ztree li a.curSelectedNode {
		color: #f6771f !important;
	}
}
</style>
