<template>
  <div class="audioConference">
    <div class="left">
      <div class="title">
        <div class="left">
          主题：
          <span>918重大逃逸案</span>
        </div>
        <div class="right">
          <div>
            共参与：
            <span></span>人
          </div>
          <div>
            共参与：
            <span></span>人
          </div>
          <div>
            共参与：
            <span></span>人
          </div>
          <div>
            <el-button size='mini'>
              邀请成员
            </el-button>
          </div>
          <div>
            大
          </div>
        </div>

      </div>
      <div class="content">
        <audio-child v-for="item in 10 " class="userChild"></audio-child>
      </div>
    </div>
    <div class="right">
      <div class="userInfo"></div>
      <div class="userMessage"></div>
      <div class="userSubmit"></div>
    </div>
  </div>
</template>

<script>
import audioChild from './components/audioChild.vue'
export default {
	name: 'audioConference',
	data() {
		return {}
	},
	components: {
		audioChild,
	},
}
</script>
<style lang='less'>
.audioConference {
	padding: 10px;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	& > .left {
		width: calc(~'100% - 340px');
		height: 100%;
		background: white;
		& > .title {
			display: flex;
			justify-content: space-between;
			padding: 10px;
			border: 1px solid #eaeaea;
			.right {
				& > div {
					display: inline-block;
				}
			}
		}
		& > .content {
			padding: 10px;
			& > .userChild {
				display: inline-block;
				width: 14.7%;
				margin-right: 15px;
				margin-bottom: 15px;
			}
		}
	}
	& > .right {
		width: 330px;
		height: 100%;
		& > .userInfo {
      height: 25%;
      background: red
		}
		& > .userMessage {
      height: 50%;
      background: yellow
		}
		& > .userSubmit {
      height: 25%;
      background: green
		}
	}
}
</style>
