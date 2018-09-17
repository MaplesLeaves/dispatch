<template>
    <div class="leftMenuTree">
      <div style="text-align:center;margin-top: 10px;">
      <el-input size='mini' placeholder="请输入" style="width: 80% ;background:#024B7B"></el-input>
      </div>
      <div class="titleBox">
        <div class="tilleBtn">
          <span @click="catalogue(true)" :class="{serchClick: isType}">人员通讯录</span>
          <span @click="catalogue(false)" :class="{serchClick: !isType}">资源通讯录</span>
        </div>
        <div class="type">
          <el-button size='mini' @click="serchType(0)" type="primary">行政管辖</el-button>
          <el-button size='mini' @click="serchType(1)">业务管辖</el-button>
        </div>
      </div>
      <p style="color:white;text-align:center;margin-top:10px">常用联系人</p>
      <tree-node @getNode="getNode"></tree-node>
    </div>
</template>
<script>
export default {
  name: 'leftMenuTree',
  data () {
    return {
      isType: true
    }
  },
  methods: {
    getNode (data) {
      this.$emit('clickTree',true,data)
    },
    catalogue (data) { //点击选择通讯录
      this.isType = data
      this.$emit('catalogue',data)
    },
    serchType (data) { // 点击行政管辖  业务管辖

      // if(data) {
      //   this.isType = true
      // } else {
      //   this.isType = false
      // }
    }
  },
  mounted () {
  }
}
</script>

<style lang='less'>
  .leftMenuTree{
    height: 100%;
    &>.titleBox{
      &>.tilleBtn{
        display: flex;
        &>span{
          width: 50%;
          text-align: center;
          color: white;
          padding: 5px 0;
          margin: 10px 0;
        }
        &>.serchClick{
          background: #024B7B
        }
      }
      &>.type{
        text-align: center;
      }
    }
  }
  
</style>
