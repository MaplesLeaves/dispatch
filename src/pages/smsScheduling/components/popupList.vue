<template>
   <div class="popList" >
      <div v-for="(item,index) in list" :key="item.id" :class="{active:isClick==index,messageList:true}" @click="chooseInner(index)" v-text="item.inner">希望各部门工作</div>
      <div class="arrowCenterTop"></div>
    </div>
</template>

<script>
export default {
  name:'popList',
  data(){
    return {
      isClick:0,
      list:[
        {
          id:1,
          inner:'希望各部门工作',
        },
        {
          id:2,
          inner:'希望各部门工作',
        },
        {
          id:3,
          inner:'希望各部门工作',
        },
        {
          id:4,
          inner:'希望各部门工作',
        },
      ]
    }
  },
  methods:{
    chooseInner(index){
      this.isClick = index;
    }
  }
}
</script>
<style lang="less" scoped>
.popList{
  position: relative;
  padding: 10px;
  box-shadow: 4px 2px 2px #F2F2F2;
  background-color: #F6FAFF;
  border-radius: 4px;
  text-align: center;
  &>.messageList{
    line-height: 24px;
    font-size: 16px;
    color: #000;
    cursor: pointer;
  }
  &>.messageList.active{
    color: #0376C1;
  }
  &::after{
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-top: 2px solid #F2F2F2;
    border-right: 2px solid #F2F2F2;
    background-color: #F6FAFF;
    transform: rotate(-45deg);
    position: absolute;
    top: -8px;
    left: 50%;
    margin-left: -6px;
  }

}
</style>
