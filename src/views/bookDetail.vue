<template>
  <main class="book-detail">
    <Header isShowBack :title="title" :rightIcon="rightIcon" @optCallBack="editBook" @goBack="onGoBackCLick"/>
    <section class="detail-container">
      <div class="field">
        <div class="lable">名稱</div>
        <input class="title" v-model="form.title" type="text" :disabled="isDisable"/>
      </div>
      <div class="field">
        <div class="lable">作者</div>
        <input class="description" v-model="form.author" type="text" :disabled="isDisable"/>
      </div>
      <div class="field">
        <div class="lable">備註</div>
        <textarea class="author" v-model="form.description" rows="10" :disabled="isDisable"/>
      </div>
      <span v-if="errmsg" class="errmsg">{{ errmsg }}</span>
      <div v-if="optMode !== 'query'" class="btn-wrap">
        <Button text="取消" type="secondary" @click="onCancel"/>
        <Button :text="btnText" @click="onSubmit"/>
      </div>
    </section>
  </main>
</template>

<script>
import Header from '@/components/Header'
import { getBook, addBook, editBook } from '@/api/books'
import Button from '@/components/Button'

export default {
  name: 'BookDetail',
  components: {
    Header,
    Button
  },
  props: {
    id: {
      type: [String, Number],
      default: () => ''
    },
    mode: {
      type: String,
      default: 'query'
    }
  },
  data () {
    return {
      form: {
        title: '',
        description: '',
        author: ''
      },
      optMode: '',
      errmsg: ''
    }
  },
  computed: {
    title () {
      switch (this.optMode) {
        case 'add':
          return '新增書本'

        default:
          return this.form.title
      }
    },
    isDisable () {
      return this.optMode === 'query'
    },
    rightIcon () {
      switch (this.optMode) {
        case 'query':
          return 'edit'
        default:
          return ''
      }
    },
    btnText () {
      switch (this.optMode) {
        case 'add':
          return '新增'
        case 'edit':
          return '修改'
        default:
          return ''
      }
    }
  },
  created () {
    this.init()
    this.optMode = this.mode
  },
  methods: {
    async init () {
      const _data = await getBook(this.id)
      const { title, description, author } = _data
      if (this.optMode === 'add') {
        for (const i in this.form) {
          this.form[i] = ''
        }
        // this.form = { title, description, author }
      } else {
        this.form = { title, description, author }
      }
    },
    editBook () {
      this.optMode = 'edit'
    },
    onGoBackCLick () {
      this.$router.go(-1)
    },
    onCancel () {
      switch (this.optMode) {
        case 'add':
          this.$router.go(-1)
          break
        case 'edit':
          this.optMode = 'query'
          break
        default:
          break
      }
    },
    onSubmit () {
      if (!this.form.title) {
        this.errmsg = '名稱不可空白'
        return
      }
      if (!this.form.author) {
        this.errmsg = '作者不可空白'
        return
      }

      switch (this.optMode) {
        case 'add':
          this.createBook()
          break
        case 'edit':
          this.modifyBook()
          break
        default:
          break
      }
    },
    async createBook () {
      try {
        await addBook(this.form)
        this.$router.replace({ name: 'Books' })
      } catch (err) {
        console.error(err)
      }
    },
    async modifyBook () {
      try {
        await editBook(this.id, this.form)
        this.init()
      } catch (err) {
        console.error(err)
      }
    }

  }

}
</script>

<style lang="stylus" scoped>
.detail-container
  margin-top 200px
  padding 10px
  .field
    padding 10px 20px
    margin-bottom 30px
    display flex
    justify-content flex-start
    align-items flex-start
    border-radius 8px
    background-color #fff
    .lable
      width 20%
      margin-right 10px
    input, textarea
      width 80%
      border none
      outline none
      &:disabled
        background-color #fff
  .errmsg
    display block
    margin-bottom 30px
    color #ff7675
    font-weight bold
  .btn-wrap
    display flex
    justify-content space-evenly
    align-items center

</style>
