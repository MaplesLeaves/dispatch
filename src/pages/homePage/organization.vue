<template>
  <div class="organization">
    <p>单位领导</p>
    <div>
      <user-info class='childUser' v-for="(item, index) in 5" :key='index'></user-info>
    </div>
    <p>单位警员</p>
    <div>
      <user-info class='childUser' v-for="(item, index) in 5" :key='index'>
        <user-list></user-list>
      </user-info>
    </div>
  </div>
</template>
<script>
import userInfo from './components/userInfo.vue'
import userList from './components/userList.vue'
export default {
	name: 'organization',
	components: {
    userInfo,
    userList
	},
}
</script>
<style lang='less'>
.organization {
	padding: 5px 10px;
	& > p {
		margin: 10px 0;
		border-left: 5px solid #0b76bf;
		padding-left: 10px;
	}
	& > div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		.childUser {
			width: 14%;
      margin: 10px;
      // .userMOre{
      //   padding: 5px 0;
      //   background: #D6ECFB;
      //   &>li{
      //     margin-bottom: 5px;
      //     div{
      //       display: inline-block;
      //       vertical-align: top;
      //     }
          
      //     .userMoreInfo{
      //       margin: 0 10px;
      //       p{
      //         display:inline-block;
      //         width:113px;
      //         margin-right: 10px
      //       }
      //     }
      //   }
      //   &>.userMoreBox {
      //       padding: 0 10px;
      //       display:flex;
      //       justify-content: space-between;
      //     }
      //   &>.serchBtn{
      //     display: flex;
      //     justify-content: space-around;
      //     align-items: center;
      //     &>div{
      //       position: relative;
      //       background: #0B76BF;
      //       padding: 3px;
      //       border-radius: 6px;
      //     }
      //   }
      //   .butnClick{
      //     text-align: center;
      //   }
      // }
		}
	}
}
</style>
