<template>
  <div class="userInfo" @click="isClick =true" :class="{serchClick: serch,lead: true}">
    <div class="user">
			<i class="serchIcon" v-if="getIsSerch">
				<svg-icon name='serchIt' :color='isClick ? "#F6771F": "#AAAAAA"' size='20'></svg-icon>
			</i>
      <span class="icon">
        <svg-icon name='userInfo' size='35'></svg-icon>
      </span>
      <div>
        <div style="margin-bottom:10px;">张大炮
					<svg-icon name='duty' size='20' color='white' v-if="isClick"></svg-icon>
					<svg-icon name='duty' size='20' color='#0B76BF' v-else></svg-icon>
				</div>
        <div>西安市局长
          <span class="serch" :class='{isSerchRotate: isSerch}' @click.stop="isSerch = !isSerch">
            <svg-icon name='more' size='15' :color='isClick ? "white": "#4372B0"'></svg-icon>
          </span>
        </div>
      </div>
    </div>
		<transition name="el-zoom-in-top">
    <div class="userMessage"  v-show="isSerch">
      <slot></slot>
    </div>
		</transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name: 'userInfo',
	computed: {
    ...mapGetters([
      'getIsSerch'
    ])
	},
	props: {
		serch: {
			type: Boolean,
			default () {
				return false
			}
		}
	},
	data() {
		return {
			isSerch: false,
			isClick: false,
		}
	},
	methods: {
		clickItem(event) {
			this.isClick = true
		}
	}
}
</script>
<style lang='less' scoped>
.userInfo {
	position: relative;
	display: inline-block;
	box-shadow: 0 0 8px #0b76bf;
	padding: 15px 0 15px 15px;
	width: 100%;
	border-radius: 4px;
	&:hover{
		background: #AFDDFD
	}
	& > .user {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&>.serchIcon{
			position: absolute;
			top: -3px;
			left: 0;
		}
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

	& > .userMessage {
		position: absolute;
		width: 100%;
		top: 100%;
		left: 0;
		height: 0;
		color: white;
		z-index: 10;
		background: white;
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
