<template>
  <div class="monitoringAids">
    <div class="left">
      <div v-for="(item,index) in 9" :key='index'>
        <video src="../../assets/video/alarm.mp4" controls="controls" style="width: 100%;height: 100%;object-fit: fill"></video>
      </div>
    </div>
    <div class="right">
      <div class="videoBtn">
        <strong>视频控制</strong>
        <div class="content">
          <div>
            <svg-icon name='screenOne' size='35'></svg-icon>
            <p>单屏显示</p>
          </div>
          <div>
            <svg-icon name='screenTwo' size='35'></svg-icon>
            <p>四平显示</p>
          </div>
          <div>
            <svg-icon name='screenThree' size='35'></svg-icon>
            <p>九屏显示</p>
          </div>
          <div>
            <svg-icon name='screenFour' size='35'></svg-icon>
            <p>十六屏</p>
          </div>
        </div>
      </div>
      <div class="all">
        <strong>待定</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'monitoringAids',
	data() {
		return {}
	},
}
</script>

<style lang='less'>
.monitoringAids {
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
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		& > div {
			width: 33.33%;
			height: 33.33%;
			border: 1px solid white;
			background: black;
			box-sizing: border-box;
		}
	}
	& > .right {
		width: 330px;
    height: 100%;
    
    &>div{
      background: white;
      &>strong{
        background: #0B76BF;
        display: inline-block;
        width: 100%;
        padding: 5px;
        color: white;
        box-sizing: border-box;
      }
      &>.content{
        height: calc(~'100% - 31PX');
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        flex-wrap: wrap;
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
        &>div{
          width: 30%;
        }
      }
    }
    &>.videoBtn{
      height: 250px;
      margin-bottom: 10px;
    }
    &>.all{
      height: calc(~'100% - 260px')
    }
	}
}
</style>
