<template>
  <svg :class="svgClass" aria-hidden="true">
     <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    defaultIconClass: {
      type: String,
      default: '404'
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return document.getElementById(`icon-${this.iconClass}`) ? `#icon-${this.iconClass}` : `#icon-${this.defaultIconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.svg-icon
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow visible
</style>
