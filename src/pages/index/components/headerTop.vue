<template>
  <div class="headerTop">
    <div class="left">
      <img src="../../../assets/logo.png" height='60px'  alt="">
      <h2>多媒体调度平台</h2>
      <div>
        <svg-icon name='titleLogo' size='220' class="titleSvg"></svg-icon>
      </div>
    </div>
    <div class="right">
      <div v-for="(item, index) in navList" :key='index' @click='navClick(item.path)' :class="{serchColor: path === item.path}"> 
        <svg-icon :name='item.icon' size='30'></svg-icon>
        <br> {{item.name}}
      </div>
      <div>
        <img  style='width: 45px;height:45px;border-radius: 50%' src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c708fc0ac41b9d168ac79d67cbe5d3b2/8601a18b87d6277f2fe15ced22381f30e824fc70.jpg" alt="">
        <span style="display: inline-block;">
            <strong>张大炮</strong>
            <p>6号坐席台</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerTop',
  data () {
    return {
      path: 'homePage',
      navList: [
        {
          name: '呼入电话',
          icon: 'home',
          path: '12'
        },
        {
          name: '工作台',
          icon: 'home',
          path: 'homePage'
        },
        {
          name: '事件通讯录',
          icon: 'messageInfo',
          path: '15'
        },
        {
          name: '通讯调度',
          icon: 'Gis',
          path: 'communication'
        },
        {
          name: '会议管理',
          icon: 'conference',
          path: 'meetingManagement'
        }
      ]
    }
  },
  methods: {
    navClick (data) {
      this.path = data
      if(data ==='12' || data === '15'){
        this.$store.commit('SHOWMESSAGE',true)
        return false
      }
      this.$router.push({
        name: data
      })
    }
  }
}
</script>
<style lang='less'>
.headerTop {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #0b76bf;
  color: white;
	& > .left {
    img{
      vertical-align: middle;
      margin-left: 15px;
    }
		h2 {
			display: inline-block;
      vertical-align: middle;
      margin-left: 15px;
		}
		& > div {
      height: 71px;
      margin-left: 20px;
			display: inline-block;
			overflow: hidden;
			vertical-align: middle;
			.titleSvg {
				position: relative;
				top: -100%;
			}
		}
	}
	& > .right {
		& > div {
			display: inline-block;
			padding: 10px 20px;
			text-align: center;
		}
		& > .serchColor {
			background: #024b7b;
		}
	}
}
</style>
