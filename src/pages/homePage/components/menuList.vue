<template>
  <div class="menuList">
    <div class="title">
      <span @click="serchType(false)" :class="{isSerch: !type}">通话记录</span>
      <span @click="serchType(true)" :class="{isSerch: type}">微群消息</span>
    </div>
    <ul v-if="!type">
      <li>
        <div>
          <span>丰汇分局</span>
          <span>昨天</span>
        </div>
        <div>
          <span>
						<span class="iconCall">
							<svg-icon name='callIn' size='16'></svg-icon>
						</span>
						15094052915
					</span>
          <span>2分12秒</span>
        </div>
      </li>
			<li>
        <div>
          <span>丰汇分局</span>
          <span>昨天</span>
        </div>
        <div>
          <span>
						<span class="iconCall">
							<svg-icon name='callOut' size='16'></svg-icon>
						</span>
						15094052915
					</span>
          <span>2分12秒</span>
        </div>
      </li>
    </ul>
    <ul v-if="type">
      <li>
        <div>
          <div style="padding-top: 8px;padding-bottom: 5px">
            <el-badge :value="200" :max="99" class="item">
            816重大事件群
            </el-badge>
            </div>
          <span class="leftTitle">昨天</span>
        </div>
        <div class="message">张松：现在已经得到证据西安市放火行为是有人故意为之</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
	name: 'menuList',
	data() {
		return {
			type: false,
		}
	},
	methods: {
		serchType(data) {
			this.type = data
		},
	},
}
</script>
<style lang='less'>
.menuList {
	height: 100%;
	background: white;
	& > .title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		& > span {
			text-align: center;
			width: 50%;
			background: #f8f8f8;
			padding: 5px 0;
		}
		& > .isSerch {
			background: #0b76bf;
			color: white;
		}
	}
	& > ul {
		height: calc(~'100% - 31px');
		padding: 0 15px;
		& > li {
			& > div {
				display: flex;
				justify-content: space-between;
				&>span{
					color: #666666;
					font-size: 14px;
					&.leftTitle{
						line-height: 38px;
						color: #666666;
					}
				}
				
			}
			div:nth-child(2){
				color: #666666;
				line-height: 20px;
			}
			padding: 5px 0;
      border-bottom: 1px solid #eaeaea;
      &>.message{
        display:block;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
		}
	}
}
</style>
