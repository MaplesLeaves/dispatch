<template>
  <!-- 常用语 -->
  <div class="expressions">
    <div class="top">
      <div class="left">
        <el-input size='mini' class="inputMessage"></el-input>
        <el-button size='mini' type='primary'>查询</el-button>
      </div>
      <div class="right">
        <el-button size="mini" type='primary' @click='add'>添加</el-button>
        <el-button size="mini" type='primary' @click='amend'>编辑</el-button>
        <el-button size="mini" type='primary' @click='remove'>删除</el-button>
      </div>
    </div>
    <table-list :list='dataList' :tableTitle='tableList' :translate='translate'>
      <el-table-column type="selection" width="55">
      </el-table-column>
    </table-list>

    <el-dialog :title="name" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="常用语：">
          <el-input v-model="form.name" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align:center">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'expressions',
  data () {
    return {
      name: '',
      form: {},
      dialogFormVisible: false,
      tableList: [
				{
					type: 'text',
					key: 'name',
					name: '常用语',
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
  methods: {
    translate (data,item) {
      // console.error(data,key)
      return data[item.key]
    },
    remove() {

    },
    amend () {
      this.name='编辑'
      this.dialogFormVisible = true;
    },
    add() {
      this.name = '添加'
      this.dialogFormVisible = true;
    }
  }
}
</script>

<style lang='less'>
.expressions {
  .el-dialog__header{
    background: #0B76BF;
    span, i{
      color: white
    }
  }
  &>.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    &>.left{
      width: 25%;
      &>.inputMessage{
        width: 60%;
      }
    }
  }
}
</style>
