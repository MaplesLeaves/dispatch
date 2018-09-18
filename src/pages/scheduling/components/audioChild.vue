<template>
  <div class="audioChild"  :class="{serchClick: isClick,lead: true}">
    <div class="user">
      <span class="icon">
        <svg-icon name='userInfo' size='35'></svg-icon>
      </span>
      <div>
        <div>张大炮
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
    <div class="userBtn">
      <div class="left">
        <span>
          <svg-icon name='userInfo' size='20' color='#0B76BF'></svg-icon>
        </span>
        参会人
      </div>
      <div class="right">
        <span>
          <svg-icon name='callIn' size='20' color='white'></svg-icon>
        </span>
        <!-- <span>
          <svg-icon name='userInfo' size='20'></svg-icon>
        </span>
        <span>
          <svg-icon name='userInfo' size='20'></svg-icon>
        </span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'audioChild',
	data() {
		return {
			isSerch: false,
			isClick: false,
		}
	},
}
</script>
<style lang='less'>
.audioChild {
	position: relative;
	display: inline-block;
  box-shadow: 0 0 8px #0b76bf;
  padding-top: 10px;
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
	& > .userBtn {
		display: flex;
		justify-content: space-between;
		align-items: center;
    background: #F8F8F8;
    padding: 5px;
    margin-top: 10px;
    color:#0B76BF;
    &>.right{
      &>span{
        background: #0B76BF;
        width: 30px;
        text-align: center;
        display: inline-block;
      }
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
