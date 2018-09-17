<template>
<div class="tableList">
  <el-table :data="list" highlight-current-row style="padding:0" @row-click='rowClick' @row-dblclick='dbClick'>
      <slot></slot>
      <el-table-column :label="item.name" v-for="(item , index) in tableTitle" :key='index' align='center' :width="item.width">
        <template slot-scope="scope">
          <div class="hidden" v-if="item.type === 'text'" @click="translate(scope.row,item).click ? translate(scope.row,item).click() :''">
            <!-- {{scope.row}} -->
            {{typeof (translate(scope.row,item))=== 'object' ? translate(scope.row,item).name :translate(scope.row,item) }}
          </div>
          <el-tooltip class="item" effect="dark" :content="translate(scope.row,item).content" placement="top-start" v-if="item.type ==='status' ">
						 <span class="circle" :style="{background:translate(scope.row,item).color}"></span>
			    </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'tableList',
  data () {
    return {
    }
  },
  props: {
    list:{
      type:Array,
      default () {
        return []
      }
    },
    tableTitle:{
      type:Array,
      default () {
        return []
      }
    },
    translate: {
      default () {
        return ()=>{
        }
      }
    }
  },
  methods: {
    rowClick(data){
      this.$emit('rowClick', data)
    },
    dbClick (data) {
      this.$emit('dbClick',data)
    },
  },
  mounted () {

  }
}
</script>
<style lang='less'>
  .tableList {
	overflow-y: auto;
	.el-table th {
		background: rgba(153, 207, 244, 0.4);
		color: black;
	}
	.el-table td,
	.el-table th {
		padding: 5px 0;
	}
	.el-table td {
		background: #99cff4;
		color: black;
		.circle{
			display: inline-block;
			background: #6D4DAD;
			border-radius: 50%;
			width: 10px;
			height: 10px;
		}
	}
	.hidden {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
</style>
