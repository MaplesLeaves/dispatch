
<template>
  <!-- 来电呼入时进行展示 -->
  <div class="callInfo">
    <div>
      <span>
        <svg-icon name='userInfob' size='40' color='white'></svg-icon>
      </span>
    </div>
    <div>
      
      <p>{{message.name || message.phone}}</p>
    </div>
    <div>
      <strong>{{message.name ? message.phone : '未知'}}</strong>
      <strong>{{message.address}}</strong>
    </div>
    <div>电话呼入......</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			message: {
				name: '',
				phone: '15094052913',
				address: '西安市北大街',
			},
		}
	},
	methods: {},
}
</script>

<style lang='less'>
.callInfo {
	text-align: center;
	& > div {
		margin-bottom: 15px;
  }
  &>div:nth-child(1){
    & > span {
			padding: 10px;
			display: inline-block;
			background: #0b76bf;
			border-radius: 50%;
		}
  }
	& > div:nth-child(2) {
		font-size: 25px;
	}
	& > div:nth-child(3) {
		font-size: 18px;
	}
	& > div:nth-child(4) {
		font-size: 18px;
		color: red;
	}
}
</style>
