<template>
  <div class="videoRight">
    <div class="title">
      <p>参会人员</p>
      <span>
        dfas
      </span>
    </div>
    <div class="top">
      <div>
        <div>共参与：
          <span>{{num}}</span> 人
        </div>
        <div></div>
      </div>
      <div>
        <div>已参与：
          <span>{{index}}</span>人
        </div>
        <div>
          <el-button size='mini'>邀请成员</el-button>
        </div>
      </div>
      <div>
        <div>未参与：
          <span>{{key}}</span>人
        </div>
        <div></div>
      </div>
    </div>
    <ul>
      <li v-for="item in 10">
        <div>张三</div>
        <div>15094052913</div>
        <div><svg-icon name='callIn'></svg-icon></div>
      </li>
    </ul>
    <div class="buttom">
      <div>
        <span>
          <svg-icon name='One' size='20'></svg-icon>
        </span>
        <p>单屏展示</p>
      </div>
      <div>
        <span>
          <svg-icon name='all' size='20'></svg-icon>
        </span>
        <p>多屏展示</p>
      </div>
      <div>
        <el-button size='mini'>退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'videoRight',
	data() {
		return {
			key: 8,
			num: 20,
      index: 10,
      leftIcon:{
      },
      rightIcon:{
        rightIcon1:'callIn',//呼入
        rightIcon2:'callOut', //呼出
        rightIcon3:'closePhone',
        rightIcon4:'voiceCalls',
      }
		}
	},
}
</script>

<style lang='less'>
.videoRight {
  height: 100%;
	& > .title {
		background: #0b76bf;
		display: flex;
		justify-content: space-between;
		padding: 5px;
		color: white;
	}
	& > .top {
		background: #f6faff;
    padding: 5px;
    &>div{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &>ul{
    height: calc(~'100% - 155px');
    background: white;
    padding: 0 10px;
    &>li{
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
      align-items: center;
    }
  }
  &>.buttom{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background: white;
  }
}
</style>
