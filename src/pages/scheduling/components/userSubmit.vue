<template>
  <div class="userSubmit">
    <div class="serchUser">
        <span>发送给：</span>

    </div>
    <el-input type='textarea' class="inputMessage" placeholder="请输入内容"></el-input>
    <div class="submit">
      <el-button size='mini' type="primary">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
	name: 'userSubmit',
}
</script>

<style lang='less'>
.userSubmit {
	width: 100%;
	height: 100%;
	& > .serchUser {
    padding: 10px 0;
	}
	& > .inputMessage {
    height: calc(~'100% - 80px');
    textarea{
      height: 100% !important;
    }
	}
	& > .submit {

    padding: 5px 0;
		text-align: center;
	}
}
</style>
