<template>
  <span :svg-tips="title" class="svg-wrap" :class="[title ? 'svg-tips' : '', svgTips]" ref='data'>
    <svg class="icon" :class="iconClass" :style="{'font-size': size + 'px', stroke: color, fill:color}">
      <use :xlink:href="'#'+Icons[name].default.id" :style="{fill:color}"></use>
    </svg>
  </span>
</template>

<script>
import Icons from '@/icons'
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    size: {
      type: String,
      default: '12'
    },
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      Icons: Icons,
      iconClass: 'icon-' + this.name
    }
  },
  computed: {
    svgTips () {
      return 'icon-tips-' + this.size
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
.svg-wrap:hover{
  &.svg-tips{
    position: relative;
    cursor: pointer;
    &:after{
      position: absolute;
      display: block;
      top: 16px;
      content: '';
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border: 4px solid transparent;
      border-top-color: #1b1f23;
    }
    &:before{
      position: absolute;
      display: block;
      bottom: 120%;
      right: 50%;
      content: attr(svg-tips);
      padding: .2em .75em;
      etter-spacing: normal;
      word-wrap: break-word;
      white-space: pre;
      pointer-events: none;
      transform: translateX(50%);
      background-color: #1b1f23;
      border-radius: 3px;
      color: #fff;
      font-size: 12px;
    }
  }
  &.icon-tips-12,
  &.icon-tips-14{
    &:after{
      top: -4px;
    }
  }
  &.icon-tips-16,
  &.icon-tips-18{
    &:after{
      top: -8px;
    }
    &:before{
      bottom: 140%;
    }
  }
  &.icon-tips-20,
  &.icon-tips-22{
    &:after{
      top: -12px;
    }
    &:before{
      bottom: 160%;
    }
  }
  &.icon-tips-24,
  &.icon-tips-26,
  &.icon-tips-28{
    &:after{
      top: -16px;
    }
    &:before{
      bottom: 180%;
    }
  }
}
.svg-wrap{
  .icon{
    width: 1em;
    height: 1em;
    vertical-align: sub;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
