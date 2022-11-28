<template>
  <button class="btn" :class="[type]" @click.stop="click">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }

}
</script>

<style lang="stylus" scoped>
.btn
  padding 10px 60px
  font-size 24px
  border none
  border-radius 50px
  background-color #fff
  &.primary
    color #fff
    background-color #4ba9ee
  &.secondary
    color #fff
    background-color #e5e5e5
</style>
