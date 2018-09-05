<template>
  <div class="userCard" @click="isClick = !isClick" :class="{serchClick: isClick,lead: true}">
    <div class="user">
      <span class="icon">
        <svg-icon name='userInfo' size='35'></svg-icon>
      </span>
      <div>
        <div >张大炮
          <svg-icon name='duty' size='20' color='white' v-if="isClick"></svg-icon>
          <svg-icon name='duty' size='20' color='#0B76BF' v-else></svg-icon>
        </div>
        <div style="marign:5px 0;">
          西安市局长
        </div>
        <div>
          <span>
            <svg-icon name='more' size='15' :color='isClick ? "white": "#4372B0"'></svg-icon>
          </span>
          西安市局长
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'userInfo',
	data() {
		return {
			isSerch: false,
			isClick: false,
		}
	},
}
</script>
<style lang='less'>
.userCard {
	position: relative;
	display: inline-block;
	box-shadow: 0 0 8px #0b76bf;
	padding: 15px 0 15px 15px;
	width: 100%;
	border-radius: 4px;
	& > .user {
		display: flex;
		justify-content: space-around;
		align-items: center;
		& > .icon {
			width: 40px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			padding: 10px;
			background: #f8f8f8;
			border-radius: 50%;
		}
		.serch {
			display: inline-block;
			font-size: 0;
			transition: 0.5s all;
			margin: 0 10px;
		}
		.isSerchRotate {
			transform: rotate(90deg);
			transition: 0.5s all;
		}
	}
}
.lead {
	background: #d6ecfb;
}
.serchClick {
	// 点击选择
	background: #0b76bf;
	color: white;
}
</style>
