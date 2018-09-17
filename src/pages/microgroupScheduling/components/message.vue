<template>
  <div class="message">
    <div class="child">
      <div class="time">15.85</div>
      <div class="userMessage">
        <span class="userIcon">
          <svg-icon name='userInfob' size='34' color='white'></svg-icon>
        </span>
        <p>张大炮呢</p>
      </div>
      <div class="userContent">
        <i></i>
        <p>今天是个喜庆的日子</p>
      </div>
    </div>
    <div class="child rightChild">
      <div class="time">15.50</div>
      <div class="userMessage">
        <span class="userIcon">
          <svg-icon name='userInfob' size='34' color='white'></svg-icon>
        </span>
        <p>张大炮呢</p>
      </div>
      <div class="userContent">
        <i></i>
        <p>今天是个喜庆的日子</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	name: 'message',
}
</script>
<style lang='less'>
.message {
	background: #f8f8f8;
	box-sizing: border-box;
  padding: 10px;
  border:1px solid #EAEAEA;
  overflow-y: auto;
  height: 100%;
	& > .child {
    &>.time{
      text-align: center;
      width: 100%;
      height: 20px;
    }
		& > .userMessage {
			display: inline-block;
			text-align: center;
			& > p {
				margin-top: 10px;
			}
			& > .userIcon {
				display: inline-block;
				padding: 10px;
				background: #29a2f5;
				border-radius: 50%;
				vertical-align: top;
			}
		}
		& > .userContent {
			display: inline-block;
			max-width: 80%;
			vertical-align: top;
			
			margin-left: 20px;
      position: relative;
      &>p{
        background: white;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.12);
        padding: 10px;
        border-radius: 5px;
      }
			& > i {
				display: inline-block;
        position: absolute;
        left: -20px;
        top: 10px;
				width: 0;
				height: 0;
				border-width: 10px;
				border-style: solid;
				border-color: transparent white transparent transparent;
			}
		}
  }
  &>.rightChild{
    text-align: right;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    &>.userMessage{
      margin-left: 20px;
      order:2;
      -webkit-order: 2
    }
    &>.userContent{
      order:1;
      -webkit-order: 1;
      height: auto;
      &>i{
        position: absolute;
        left: 100%;
        transform: rotate(180deg)
      }
    }
  }
}
</style>
