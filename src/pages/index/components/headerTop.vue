<template>
  <div class="headerTop">
    <div class="left">
      <img src="../../../assets/logo.png" height='60px'  alt="">
      <h2>多媒体调度平台</h2>
      <div>
        <svg-icon name='titleLogo' size='220' class="titleSvg"></svg-icon>
      </div>
    </div>
    <div class="right">
      <div class="serchColor">
        <svg-icon name='home' size='30'></svg-icon>
        <br> 首页
      </div>
      <div>
        <svg-icon name='messageInfo' size='30'></svg-icon>
        <br> 事件通讯录
      </div>
      <div>
        <svg-icon name='home' size='30'></svg-icon>
        <br> 通讯调度
      </div>
      <div>
        <svg-icon name='conference' size='30'></svg-icon>
        <br> 会议管理
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'headerTop',
}
</script>
<style lang='less'>
.headerTop {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #0b76bf;
	color: white;
	& > .left {
    img{
      vertical-align: middle;
      margin-left: 15px;
    }
		h2 {
			display: inline-block;
      vertical-align: middle;
      margin-left: 15px;
		}
		& > div {
      height: 71px;
      margin-left: 20px;
			display: inline-block;
			overflow: hidden;
			vertical-align: middle;
			.titleSvg {
				position: relative;
				top: -100%;
			}
		}
	}
	& > .right {
		& > div {
			display: inline-block;
			padding: 10px 20px;
			text-align: center;
		}
		& > .serchColor {
			background: #024b7b;
		}
	}
}
</style>
