<template>
  <div class="menBtn">
    <div v-for="(item, index) in btnList" :key='index' @click="clickBtn(item.path)">
      <span class='iconImage' style="background:#0B76BF;display:inline-block;padding: 5px" v-if="item.path">
        <svg-icon :name='item.path' size='25' v-if="item.path" ></svg-icon>
      </span>
      <br>
      {{item.name}}
    </div>
  </div>
</template>
<script>
export default {
	name: 'menuBtn',
	data() {
		return {
			btnList: [
				{
					name: '语音调度',
					path: 'microphone',
				},
				{
					name: '音频视频调度',
					path: 'video',
				},
				{
					name: '短信调度',
					path: 'noteInfo',
				},
				{
					name: '微群调度',
					path: 'wechat',
				},
				{
					name: '语音会议',
					path: 'voiceMessage',
				},
				{
					name: '音视频会议',
					path: 'videoMessage',
				},
				{
					name: 'Gis调度',
					path: 'Gis',
				},
				{
					name: '敬请期待',
					path: '',
				},
				{},
			],
		}
	},
  methods:{
    clickBtn (data) {
			console.error(data)
			this.$emit('serchUser',data)
    }
  }
}
</script>

<style lang='less'>
.menBtn {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-content: space-between;
	flex-wrap: wrap;
	padding: 15px;
  box-sizing: border-box;
  background: white;
	& > div {
		width: 30%;
		text-align: center;
		font-size: 13px;
		& > .iconImage {
			background: #0b76bf;
			display: inline-block;
			padding: 5px;
			border-radius: 5px;
		}
	}
}
</style>
