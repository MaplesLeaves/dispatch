<template>
  <div class="menuNum">
    <div class="top">
      <span v-for="(item, index) in numList" :key='index' @click="serchNum(item.num)">
        {{item.num}}
      </span>
    </div>
    <div class="bottom">
      <el-input class="number" placeholder="请输入电话号码" suffix-icon="el-icon-date" size='mini'>
      </el-input>
      <span style="vertical-align: middle;padding:3px;background:white;border-radius: 3px;">
        <svg-icon name='phone' size='20'></svg-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
	name: 'nuenuNum',
	data() {
		return {
			numList: [
				{
					num: '1',
				},
				{
					num: '2',
				},
				{
					num: '3',
				},
				{
					num: '4',
				},
				{
					num: '5',
				},
				{
					num: '6',
				},
				{
					num: '7',
				},
				{
					num: '8',
				},
				{
					num: '9',
				},
				{
					num: '*',
				},
				{
					num: '0',
				},
				{
					num: '#',
				},
			],
		}
	},
	serchNum (data) {

	}
}
</script>

<style lang='less'>
.menuNum {
	height: 100%;
	background: #0b76bf;
	& > .top {
		height: calc(~'100% - 66px');
    display: flex;
		justify-content: space-between;
		align-content: space-between;
		flex-wrap: wrap;
		color: white;
		padding: 15px 20px;
		& > span {
			width: 48px;
			text-align: center;
			line-height: 48px;
			font-size: 20px;
			height: 48px;
			border-radius: 50%;
			background: #024b7b;
			margin: 0 18px;
			&:hover{
				background: #66a8ff
			}
		}
	}
	& > .bottom {
		text-align: center;
		.number {
			width: 80%;
		}
		.el-input--suffix .el-input__inner {
			padding-left: 30px;
		}
		.el-input__suffix {
      right: calc(~"100% - 30px");
		}
	}
}
</style>
