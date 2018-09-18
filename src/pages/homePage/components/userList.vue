<template>
  <ul class="userList">
    <li>
      <span>
        <svg-icon name='callPhone' size='20'></svg-icon>
      </span>
      <div>
        <div>
          <p>15094052913</p>
          <el-checkbox></el-checkbox>
        </div>
      </div>
      <span>

      </span>
    </li>
    <li>
      <li>
        <span>
          <svg-icon name='userPhone' size='20'></svg-icon>
        </span>
        <div>
          <div>
            <p>15094052913</p>
            <el-checkbox></el-checkbox>
          </div>
          <div>
            <p>15094052913</p>
            <el-checkbox></el-checkbox>
          </div>
        </div>
        <span>
        </span>
      </li>
      <li>
        <li>
          <span>
            <svg-icon name='terminal' size='20'></svg-icon>
          </span>
          <div>
            <div>
              <p>15094052913</p>
              <el-checkbox></el-checkbox>
            </div>
          </div>
          <span>

          </span>
        </li>
        <li>
          <i>
            <svg-icon name='microphone' size='20'></svg-icon>
          </i>
          <i>
            <svg-icon name='video' size='20'></svg-icon>
          </i>
          <i>
            <svg-icon name='videoMessage' size='20'></svg-icon>
          </i>
          <i>
            <svg-icon name='wechat' size='20'></svg-icon>
          </i>
        </li>
        <li>
          <p>展开更多</p>
        </li>
        <li>
          <el-button size="mini" @click="closeUser">取消常用人</el-button>
          <el-button size="mini">通信管理</el-button>
        </li>
  </ul>
</template>

<script>
export default {
  name: 'userList',
  methods:{
    closeUser () {
      console.error(1231523)
      this.$store.commit('CLOSEUSER',{isShow:true})
    }
  }
}
</script>

<style lang='less'>
.userList {
	background: #d6ecfb;
  color: black;
  padding:5px 0; 
  &>li:nth-child(1){
    margin: 0;
  }
	& > li {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-top: 5px;
		padding: 0 10px;
		& > p {
			text-align: center;
			width: 100%;
			color: #0b76bf;
			font-size: 14px;
		}
		& > div {
			& > div {
				& > p {
					display: inline-block;
					width: 120px;
				}
			}
		}
		& > i {
			background: #0b76bf;
			border-radius: 5px;
			padding: 5px;
		}
	}
}
</style>
