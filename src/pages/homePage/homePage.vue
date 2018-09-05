<template>
  <div class="homePage">
    <div class="left">
      <left-tree></left-tree>
    </div>
    <div class="content">
      <common></common>
      <organization></organization>
    </div>
    <div class="right">
      <right-phone></right-phone>
    </div>
  </div>
</template>
<script>
import leftTree from './components/leftMenu.vue'
import rightPhone from './components/rightPhone.vue'
import userInfo from './components/userInfo.vue'
import organization from './organization.vue'
import common from './common.vue'

export default {
	name: 'homePage',
	components: {
		leftTree,
		rightPhone,
    userInfo,
    organization,
    common
	},
}
</script>
<style lang='less'>
.homePage {
	height: 100%;
	display: flex;
	justify-content: space-between;
	& > .left {
		width: 270px;
		background: #0b76bf;
	}
	& > .content {
		width: calc(~'100% - 570px');
		background: white;
		margin: 10px 10px 0 10px;
	}
	& > .right {
		width: 300px;
		margin: 10px 10px 0 0;
	}
}
</style>

