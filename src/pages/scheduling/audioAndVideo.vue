<template>
  <div class="audioAndVideo">
    <div class="left">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="right">
    </div>
  </div>
</template>

<script>
export default {
	name: 'audioAndVideo',
}
</script>

<style lang='less'>
.audioAndVideo {
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
    &>div{
      width: 33.33%;
      height: 33.33%;
      border:1px solid red;
      background: yellow;
      box-sizing: border-box;
    }
	}
	& > .right {
		width: 330px;
		height: 100%;
	}
}
</style>
