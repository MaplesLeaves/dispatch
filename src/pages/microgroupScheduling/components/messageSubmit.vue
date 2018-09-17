<template>
  <div class="messageSubmit">
    <div class="title">
      <span v-for="(item, index) in list" :key="index" @click="showMessage(index)">
        <svg-icon  :name='item.name' size='30'></svg-icon>
      </span>
    </div>
    <el-input type="textarea" ></el-input>
    <div class="footer">
      <el-button type='primary' size='mini'>立即发送</el-button>
    </div>
    <call-message v-if="isCallInfo" @call='call'></call-message>
  </div>
</template>
<script>
export default {
	name: 'messageSubmit',
	data() {
		return {
      isCallInfo: false,
			list: [
				{
					name: 'wsSwitch',
					key: '',
				},
				{ 
          name: 'wsVoice',
          key: ''
        },
				{
          name: 'wsFolder',
          key: ''
        },
				{
          name: 'wsVideo',
          key: ''
        },
			],
		}
  },
  methods: {
    call(data) {
      this.isCallInfo = false
    },
    showMessage(index) {
      if(index === 1){
        this.isCallInfo = true
      }
    }
  }
}
</script>

<style lang='less'>
.messageSubmit {
  &>.title{
    margin: 10px;
    &>span{
      display: inline-block;
      margin-right: 20px;
    }
  }
  .el-textarea__inner{
    height: 150px !important;
    size: none;
  }
  &>.footer{
    padding: 10px 0;
    text-align: right;
  }
}
</style>
