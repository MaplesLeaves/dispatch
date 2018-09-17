<template>
  <div class="callMessage">
    <img src="../../assets/phone.gif" height='150px' alt="">
    <p>
      00:20
    </p>
    <div>
      <el-button size="mini" type="primary" @click="call(true)">发起</el-button>
      <el-button size="mini" @click="call(false)">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'callMessage',
  methods: {
    call (data) {
      this.$emit('call',data)
    }
  }
}
</script>

<style lang='less'>
  .callMessage{
    width: 260px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    position: fixed;
    padding-top: 20px;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: white;
    &>img,&>p,&>div{
      margin-bottom: 20px;
    }
  }
</style>
