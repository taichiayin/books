<template>
  <div class="book-detail">
    book detail {{id}}
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  props: {
    id: {
      type: [String, Number],
      default: () => ''
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
