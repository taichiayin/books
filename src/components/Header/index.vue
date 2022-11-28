<template>
  <header class="header">
    <SvgIcon v-if="isShowBack" class-name="ico back" icon-class="arrow-left" @click.native="goBack"/>
    <h1 class="title">{{ title }}</h1>
    <SvgIcon v-if="rightIcon" class-name="ico opt" :icon-class="rightIcon" @click.native="onOptClick"/>
  </header>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  components: {
    SvgIcon
  },
  props: {
    // 標題
    title: {
      type: String,
      default: ''
    },
    // 右側ico
    rightIcon: {
      type: String,
      default: ''
    },
    // 是否顯示back ico
    isShowBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack () {
      this.$emit('goBack')
    },
    onOptClick () {
      this.$emit('optCallBack')
    }
  }

}
</script>

<style lang="stylus" scoped>
.header
  position relative
  padding 10px
  text-align center
  .title
    padding 0 20px
    font-size 24px

  .ico
    width 24px
    height 24px
    position absolute
    &.back
      top 50%
      left 10px
      transform translate(0, -50%)
    &.opt
      top 50%
      right 10px
      transform translate(0, -50%)
      fill #4d88ed
      cursor pointer

</style>
