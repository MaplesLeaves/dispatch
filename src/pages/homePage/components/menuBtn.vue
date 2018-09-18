<template>
  <div class="menBtn">
    <div v-for="(item, index) in btnList" :key='index' @click="clickBtn(item)">
      <span class='iconImage' style="background:#0B76BF;display:inline-block;padding: 5px" v-if="item.icon">
        <svg-icon :name='item.icon' size='25' v-if="item.icon" ></svg-icon>
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
					icon: 'microphone',
				},
				{
					name: '音频视频调度',
					icon: 'video',
				},
				{
					name: '短信调度',
					icon: 'noteInfo',
				},
				{
					name: '微群调度',
					icon: 'wechat',
					path: 'microgroupScheduling'
				},
				{
					name: '语音会议',
					icon: 'voiceMessage',
				},
				{
					name: '音视频会议',
					icon: 'videoMessage',
				},
				{
					name: 'Gis调度',
					icon: 'Gis',
				},
				{
					name: '敬请期待',
					icon: '',
				},
				{},
			],
		}
	},
  methods:{
    clickBtn (data) {
			if(data.path){
				this.$router.push({
					name: data.path
				})
				return
			}
			this.$emit('serchUser',data)
			this.$store.commit('ISSERCH',true)
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
