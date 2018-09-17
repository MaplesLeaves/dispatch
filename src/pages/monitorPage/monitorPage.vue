<template>
  <el-container>
      <el-header class="devHeader" style="line-height:61px;display:flex;">
        <div>
          <span>名称:</span>
          <p>摄像头大寨路0001号</p>
        </div>
        <div>
          <span>类型:</span>
          <p>球形云台:</p>
        </div>
        <div>
          <span>状态:</span>
          <p>正常</p>
        </div>
        <div>
          <span>描述:</span>
          <p>正常</p>
        </div>
        <div>
          <span>拥有:</span>
          <p>正常</p>
        </div>
        <div>
          <span>描述:</span>
          <p>正常</p>
        </div>
      </el-header>       
      <el-main>
        <span style="color:#666666;">设备参数:</span>
        <div style="line-height:48px"></div>
        <el-table 
        :data="tableData6"
        :span-method="objectSpanMethod"
        border
        style="width: 100%;">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="amount1"
          label="数值 1（元）">
        </el-table-column>
        <el-table-column
        prop="amount2"
        label="数值 2（元）">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="数值 3（元）">
      </el-table-column>
    </el-table>
      </el-main>
    </div>
  </el-container>
</template>
<script>

export default {
  name:'monitorPage',
	data() {
      return {
        tableData6: [{
          id: '视频',
          name: '视频压缩',
          amount1: '',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '视频',
          name: '最大图像尺寸',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '视频',
          name: '帧率',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 3 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 3 === 0) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }

	


	 
}
</script>
<style lang='less'>
.el-main{
	padding-top: 0;
	&>span{
		display: flex;
		line-height: 60px;
		background-color: #fff;
		padding: 0 20px;
	}

}
.devHeader{
	line-height: 61px;
	display: flex;
	background-color: #fff;
	margin: 0 20px;
	justify-content: space-between;
	&>div{
		display: flex;
		justify-content: space-between;
		&>span{
			color: #666666;
			padding-right:10px; 
		}
	}

}

</style>

