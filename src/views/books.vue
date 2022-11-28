<template>
  <main class="books">
    <Header title="書本列表" rightIcon="plus" @optCallBack="addBook"/>
    <section class="books-container">
      <BookCard v-for="item in bookList"
        :key="item.id"
        :itemData="item"
        @click.native="onBookClick(item.id)"/>
    </section>
  </main>
</template>

<script>
import { getBooks } from '@/api/books'

import Header from '@/components/Header'
import BookCard from '@/components/BookCard'

export default {
  name: 'BooksPage',
  components: {
    Header,
    BookCard
  },
  data () {
    return {
      bookList: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      try {
        const _data = await getBooks()
        this.bookList = _data
      } catch (err) {
        console.error(err)
      }
    },
    onBookClick (id) {
      this.$router.push({ name: 'BookDetail', params: { id, mode: 'query' } })
    },
    addBook () {
      this.$router.push({ name: 'BookCreate' })
    }
  }

}
</script>

<style lang="stylus" scoped>
.books
  position relative
  .books-container
    padding 10px
    display flex
    justify-content flex-start
    align-items stretch
    flex-wrap wrap
</style>
