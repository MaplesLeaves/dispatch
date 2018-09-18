<template>
  <div class="rightList">
    <div class="title">
      <el-input  placeholder="搜索群成员" size="mini"></el-input>
      <p>已有
        <span>18</span>
        人， 您还可以在要请
        <span> 10 </span>人</p>
    </div>
    <ul>
      <li>
        <span>
          <svg-icon name='addUser' size='35' color='white'></svg-icon>
        </span>
        <p>添加成员</p>
      </li>
      <li>
        <span>
          <svg-icon name='removeUser' size='35' color='white'></svg-icon>
        </span>
        <p>
          删除成员
        </p>
      </li>
      <li>
        <span>
          <svg-icon name='userInfob' size='35' color='white'></svg-icon>
        </span>
        <p>
          张大炮
        </p>
      </li>
    </ul>
    <div class="footer">
      <el-button size="mini" type="primary">退出群聊</el-button>
    </div>
  </div>
</template>

<script>
export default {
	name: 'rightList',
}
</script>
<style lang='less'>
.rightList {
  height: 100%;
  &>.title{
    margin-top: 10px;
    &>p{
      margin: 10px 0;
    }
  }
	& > ul {
		display: flex;
		justify-content: space-around;
    flex-wrap: wrap;
    height: calc(~'100% - 115px');
		& > li {
			text-align: center;
			& > span {
				display: inline-block;
				padding: 10px;
				border-radius: 50%;
				background: #29a2f5;
			}
		}
	}
	& > .footer {
		text-align: center;
	}
}
</style>
