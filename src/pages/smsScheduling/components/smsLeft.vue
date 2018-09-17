<template>
  <div class="smsLeft">
      <ul>
        <li v-for="(item,index) in list" :key="item.id" @click.stop="tabSelect(index,item.path)" :class="{active:isClick==index}">
          <span>
              <svg-icon  :name="isClick==index?item.iconNameActive:item.iconName" size='18'></svg-icon>
          </span>
          <div v-text="item.tabName" :class="{active:isClick == index}">发送短信</div>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name:'smsLeft',
  data(){
    return{
      isClick:0,
      list:[
        {
          id:'1',
          iconName:'smsRecord',
          iconNameActive:'smsRecordActive',
          tabName:'发送短信',
          path: 'sendMessage',
        },
        {
          id:'2',
          iconName:'smsSend',
          iconNameActive:'smsSendActive',
          tabName:'发送记录',
          path: 'messageRecorder',
        },
        {
          id:'3',
          iconName:'smsTerm',
          iconNameActive:'smsTermActive',
          tabName:'常用语',
          path: 'expressions',
        },
        {
          id:'4',
          iconName:'smsSignature',
          iconNameActive:'smsSignatureActive',
          tabName:'签名设计',
          path: 'signature',
        }
      ]
    }
  },
  methods:{
    tabSelect(index, path){
      this.isClick = index;
      this.$router.push({
        name: path
      })
    }
  }
}
</script>
<style lang="less" scoped>
 .smsLeft{
    height: 100%;
    background-color: #fff;
    ul{
      height: calc(100% - 39px);
      width: 239px;
      display: flex;
      padding-top: 39px;
      flex-direction: column;
      align-items: center;
      background-color: #0B76BF;
      li{
        width:197px;
        height: 50px;
        background-color: #024B7B;
        border-radius: 4px;
        margin: 10px 0;
        position: relative;
        cursor: pointer;
        &.active{
          background-color: #fff;
        }
        &>span{
          position: absolute;
          left: 36px;
          top: 13px;
        }
        &>div{
          font-size: 16px;
          line-height: 50px;
          position: absolute;
          color: #fff;
          left: 66px;
          top: 0;
          &.active{
            color: #0B76BF;
          }
        }
      }
    }
  }
</style>
