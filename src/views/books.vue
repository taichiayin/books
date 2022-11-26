<template>
  <div class="books">
    <Header />
    books
    <BookCard />
    <Button />
  </div>
</template>

<script>
import { getBooks } from '@/api/books'

import Header from '@/components/Header'
import BookCard from '@/components/BookCard'
import Button from '@/components/Button'

export default {
  name: 'BooksPage',
  components: {
    Header,
    BookCard,
    Button
  },
  mounted () {
    getBooks()
  }

}
</script>

<style lang="stylus" scoped>

</style>
