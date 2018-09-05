<template>
  <div class="organization">
    <p>单位领导</p>
    <div>
      <user-info class='childUser' v-for="item in 5"></user-info>
    </div>
    <p>单位警员</p>
    <div>
      <user-info class='childUser' v-for="item in 5">
        <ul style="color:black" class="userMOre" @click.stop>
          <li class='userMoreBox'>
            <svg-icon  name='callPhone' size='20'></svg-icon>
            <div class="userMoreInfo">
              <div><p >15094052913 </p><el-checkbox></el-checkbox></div>
            </div>
          </li>
          <li class='userMoreBox'>
            <svg-icon  name='userPhone' size='20'></svg-icon>
            <div class="userMoreInfo">
              <div><p >15094052913 </p><el-checkbox></el-checkbox></div>
              <div><p >15094052913 </p><el-checkbox></el-checkbox></div>
            </div>
          </li>
          <li class='userMoreBox'>
            <svg-icon name='terminal' size='20'></svg-icon>
            <div class="userMoreInfo">
              <div><p style="">15094052913 </p><el-checkbox></el-checkbox></div>
            </div>
          </li>
          <li class="serchBtn">
            <div>
              <svg-icon name='microphone' size='20'></svg-icon>
            </div>
            <div>
              <svg-icon name='video' size='20'></svg-icon>
            </div>
            <div>
              <svg-icon name='videoMessage' size='20'></svg-icon>
            </div>
            <div>
              <svg-icon name='wechat' size='20'></svg-icon>
            </div>
            <div>
              <svg-icon name='noteInfo' size='20'></svg-icon>
            </div>
          </li>
          <li style="text-align:center;font-size: 14px;color:#0B76BF">
            展开更多
          </li>
          <li class="butnClick">
            <el-button size="mini">取消常用人</el-button>
            <el-button size="mini">通信管理</el-button>
          </li>
        </ul>
      </user-info>
    </div>
  </div>
</template>
<script>
import userInfo from './components/userInfo.vue'
export default {
	name: 'organization',
	components: {
		userInfo,
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
      .userMOre{
        padding: 5px 0;
        background: #D6ECFB;
        &>li{
          margin-bottom: 5px;
          div{
            display: inline-block;
            vertical-align: top;
          }
          
          .userMoreInfo{
            margin: 0 10px;
            p{
              display:inline-block;
              width:113px;
              margin-right: 10px
            }
          }
        }
        &>.userMoreBox {
            padding: 0 10px;
            display:flex;
            justify-content: space-between;
          }
        &>.serchBtn{
          display: flex;
          justify-content: space-around;
          align-items: center;
          &>div{
            position: relative;
            background: #0B76BF;
            padding: 3px;
            border-radius: 6px;
          }
        }
        .butnClick{
          text-align: center;
        }
      }
		}
	}
}
</style>
