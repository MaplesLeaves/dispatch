<template>
  <div id='callDialog'>
    <el-dialog :title="title" :visible.sync="getShowMessage"  center :width="width" :show-close='false' :close-on-press-escape='false' :close-on-click-modal='false'>
      <!-- <span>需要注意的是内容是默认不居中的</span>
       -->
       <slot>

       </slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="success" size="mini" type="success">{{succeedText}}</el-button>
        <el-button type="danger" @click="error" size="mini">{{errorText}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name: 'callDialog',
	data() {
		return {
      showLog: true 
    }
  },
  computed: {
    ...mapGetters([
      'getShowMessage'
    ])
  },  
  watch: {
    show (newVal ,oldVal) {
      this.showLog = newVal
    }
  },
  props: {
    show: {
      type: Boolean,
      default () {
        return true
      }
    },
    succeedText: {
      type: String,
      default () {
        return '接 听'
      }
    },
    width: {
      type: String,
      default () {
        return '30%'
      }
    },
    errorText: {
      type: String,
      default () {
        return '拒 绝'
      }
    },
    title: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    success () {
      this.$emit('success',true)
    },
    error () {
      this.$emit('error',this.show)
    }
  }
}
</script>

<style lang='less'>
#callDialog {
  &>.el-dialog__wrapper{
    &>.el-dialog{
      border-radius: 10px;
      top: 50%;
      transform: translateY(-50%);
      margin-top: 0 !important
    }
  }
  .el-dialog__body{
    padding: 10px;
    
  }
}
</style>
