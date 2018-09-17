<template>
  <!-- 群发消息 -->
  <div class="massMessage">
    <div>
      <span>
        <svg-icon name='userInfob' size='30' color='white'></svg-icon>
      </span>
      <div>
        <strong>{{message.name}}</strong>
        <p>{{message.id}} &nbsp &nbsp {{message.address}}</p>
      </div>
    </div>
    <div>
      <svg-icon name='voiceCalls' v-if="type === 'voice'" size='80' color='#666666'></svg-icon>
      <svg-icon name='camera' v-else size='80' color='#666666'></svg-icon>
      <p v-if="type === voice">邀请你语音通话</p>
      <p v-else>邀请你视频通话</p>
    </div>
    <div>
      <p v-if="message.title">{{message.title}}</p>
      <span v-for="(item, index) in list" v-if="index<5">
        <svg-icon name='userInfob' size='25' color='white'></svg-icon>
      </span>
      <i v-if="list > 4">...</i>
      已加入
      <b>18</b>人
    </div>
  </div>
</template>
<script>
export default {
	name: 'massMessage',
	data() {
		return {
			list: 18,
			message: {
				name: '张三',
				id: 123456,
        address: '西安市派出所',
        title: '818重大事件'
			},
		}
  },
  props: {
    type: {
      type: String,
      default () {
        return 'voice'
      }
    }
  }
}
</script>
<style lang='less'>
.massMessage {
	& > div {
		margin-bottom: 10px;
	}
	& > div:nth-child(1) {
		text-align: center;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		& > div {
			text-align: left;
			margin-left: 20px;
			& > strong {
				margin-bottom: 5px;
				font-size: 18px;
				display: inline-block;
			}
		}
		& > span {
			display: inline-block;
			padding: 15px;
			border-radius: 50%;
			background: #0b76bf;
		}
	}
	& > div:nth-child(2) {
		text-align: center;
		& > span {
			display: inline-block;
			margin-bottom: 10px;
		}
	}
	& > div:nth-child(3) {
    display: flex;
    align-items: center;
    background: #F8F8F8;
    padding: 10px;
    flex-wrap: wrap;
    &>p{
      width: 100%;
      padding: 5px 0;
    };
    &>i{
      margin-right: 10px;
    }
    &>b{
      color: red;
    }
    &>span{
      display: inline-block;
			padding: 10px;
			border-radius: 50%;
      background: #0b76bf;
      margin-right: 10px;
    }
	}
}
</style>
