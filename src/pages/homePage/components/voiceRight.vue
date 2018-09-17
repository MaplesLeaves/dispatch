<template>
  <div class="voiceRight">
    <div class="title">
      <span>语音视频调度</span>
      <span>已选8人</span>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in data" :key="item.direaction">
          <span v-text="item.name">张三</span>
          <span class="listIcon">
            <svg-icon :name="iconArray[item.direaction-1].iconName" size='18'></svg-icon>
          </span>
          <span>15094052916</span>
          <i class="el-icon-error" style="color: #ccc"></i>
        </li>
        <li>
          <span>张三</span>
            <span class="icon" >
              <svg-icon :name='iconArray[0].iconName' size='18'></svg-icon>
            </span>
          <span>15094052916</span>
          <i class="el-icon-error" style="color: #ccc"></i>
        </li>
      </ul>
    </div>
    <div class="button">
      <el-button size='mini' @click="go" type="primary">发起</el-button>
      <el-button size='mini' @click="close">取消</el-button>
    </div>
   
  </div>
</template>
<script>
export default {
	name: 'voiceRight',
	data() {
		return {
      type: '',
      data:[
          {
            deviceId:'123456',
            direaction:'1',
            name:'张三'
          },
          {
            deviceId:'123456',
            direaction:'2',
            name:'张三'
          },
          {
            deviceId:'123456',
            direaction:'3',
            name:'张三'
          }
        ],
      iconArray:[
        {
          direaction:'1',
          name:"座机",
          iconName:"callPhone" 
        },
        {
          
          direaction:'2',
          name:'对讲机',
          iconName:"terminal"
        },
        {
          direaction:'3',
          name:"手机",
          iconName:"userPhone"
        }
      ]
		}
	},
	methods: {
		go() {},
		close() {
			this.$emit('close')
    },
	},
}
</script>
<style lang='less'>
.voiceRight {
	height: 100%;
	width: 100%;
  position: relative;
	& > .title {
		background: #0b76bf;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		color: white;
	}
	& > .list {
		padding: 10px;
    background: white;
    
		& > ul {
			& > li {
				display: flex;
				justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        span:nth-child(1){
          width: 18%;
        }
        span:nth-child(2){
          width: 10%;
        }
        span:nth-child(3){
          width: 40%;
        }
			}
		}
	}
	.button {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		text-align: center;
		padding: 10px 0;
	}
}
</style>
