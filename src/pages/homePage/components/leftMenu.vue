<template>
    <div class="leftMenuTree">
      <ul id='tree' class="ztree txt-sm"></ul>
    </div>
</template>

<script>
export default {
  name: 'leftMenuTree',
  data () {
    return {
      type: [],
      message :[
        {
          id: 1,
          name: '张三',
          pid: '0',
          children:[
            {
          id: 9,
          name: '李四',
          pid: '1'
        },
          ]
        },
        {
          id: 9,
          name: '李四',
          pid: '1'
        },
        {
          id: 6,
          name: '万物',
          pid: '1'
        },
      ]
    }
  },
  methods: {

  },
  mounted () {
    $.fn.zTree.init($('#tree'),this.type,this.message)
  }
}
</script>

<style lang='less'>
  .leftMenuTree{
    height: 100%;
  }
</style>
