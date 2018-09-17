<template>
  <div class="leftList">
    <div class="top">
      <el-input size='mini' class='inputMessage' placeholder="请输入名称"></el-input>
      <span>
        <svg-icon name='addUser' size='20' color='#0B76BF'></svg-icon>
      </span>
    </div>
    <ul>
      <li class="clickList">
        <div class="top">
          <div>
            815大型踩踏事件
            <span></span>
          </div>
          <p>10:20</p>
        </div>
        <div class="content">
          已经接到附近警力支援，请各警员进行配合完成处理
        </div>
      </li>
      <li >
        <div class="top">
          <div>
            815大型踩踏事件
            <span></span>
          </div>
          <p>10:20</p>
        </div>
        <div class="content">
          已经接到附近警力支援，请各警员进行配合完成处理
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
	name: 'leftList',
}
</script>

<style lang='less'>
.leftList {
  &>.top{
    display: flex;
    justify-content: space-between;
    padding: 5px;
    &>.inputMessage{
      width: calc(~'100% - 30px');
    }
    &>span{
      display: inline-block;
      padding: 2px;
      border-radius: 3px;
      background: white;
    }
  }
	& > ul {
    background: #0E5A8E;
    padding: 5px;
		& > li {
      color: white;
      padding: 8px;
			& > .top {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.content {
				overflow: hidden; //超出的文本隐藏
				text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap;
        padding-top: 10px;
			}
    }
    &>.clickList {
      background: #034570;
    }
	}
}
</style>
