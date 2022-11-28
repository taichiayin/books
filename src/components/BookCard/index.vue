<template>
  <div class="book-card">
    <div class="pic">
      <EnsureImage :src="itemData.image" :default-src="defaultImage" alt="書籍封面"/>
    </div>
    <h2 class="title">{{ itemData.title }}</h2>
    <p class="description">{{ itemData.description }}</p>
    <p class="author">作者：<span>{{ itemData.author }}</span></p>
  </div>
</template>

<script>
import EnsureImage from '@/components/EnsureImage'
import defaultImage from '@/assets/images/defaultImg330x330.png'

export default {
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    EnsureImage
  },
  data () {
    return {
      defaultImage
    }
  }
}
</script>

<style lang="stylus" scoped>
.book-card
  width calc((100% - 80px) / 2)
  margin 10px
  padding 10px
  display flex
  flex-direction column
  justify-content center
  background-color #fff
  &:hover
    box-shadow 0 4px 10px 0 rgba(130, 137, 145, 0.15)
  .pic
    img
      width 100%
      object-fit contain
  .title
    height 4ex
    overflow hidden
    text-overflow ellipsis
    display -webkit-box
    -webkit-line-clamp 2
    -webkit-box-orient vertical
    margin-bottom 10px
    font-size 16px
    font-weight bold
    color #000
  .description
    overflow hidden
    text-overflow ellipsis
    display -webkit-box
    -webkit-line-clamp 2
    -webkit-box-orient vertical
    margin-bottom 10px
    font-size 12px
    color #aaa
  .author
    margin-top auto
    font-size 12px
    span
      color #74b9ff
</style>
