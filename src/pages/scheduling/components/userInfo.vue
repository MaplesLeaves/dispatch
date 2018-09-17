<template>
  <div class="userInfo">
    <div class="title">发起人</div>
    <div class="content">
      <div class="left">
        <svg-icon name='userInfo' size='35'></svg-icon>
      </div>
      <div class="right">
        <p>
          <strong>张阳阳</strong> 分局局长</p>
        <p>15094052912</p>
      </div>
    </div>
    <div class="button">
      <span>
        全场发发言
      </span>
      <span>
        全场禁言
      </span>
      <span>
        退出会议
      </span>
    </div>
  </div>
</template>

<script>
export default {
	name: 'userInfo',
}
</script>

<style lang='less'>
.userInfo {
  height: 100%;
  background: white;
	& > .title {
		color: white;
    background: #0b76bf;
    box-sizing: border-box;
    padding: 5px;
	}
	& > .content {
    height: calc(~'100% - 70px');
    display: flex;
    align-items: center;
		& > div {
			display: inline-block;
			vertical-align: middle;
		}
		& > .left {
			background: #f8f8f8;
      border-radius: 50%;
      padding: 10px;
      margin: 0 20px;
    }
    &>.right{
      p{
        padding: 5px 0
      }
    }
	}
	& > .button {
		display: flex;
		justify-content: space-around;
		align-items: center;
		& > span {
			width: 30%;
			border: 1px solid #eaeaea;
      background: #f8f8ff;
      color: #0B76BF;
      text-align: center;
      padding: 5px 0;
      border-radius: 5px;
		}
	}
}
</style>
