<template>
  <img :src="localSrc" :alt="alt">
</template>

<script>
export default {
  name: 'EnsureImage',
  props: {
    src: {
      type: String,
      default: () => ''
    },
    defaultSrc: {
      type: String,
      default: () => ''
    },
    alt: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      localSrc: ''
    }
  },
  watch: {
    src () {
      this.checkImage()
    }
  },
  mounted () {
    this.checkImage()
  },
  methods: {
    checkImage () {
      const img = document.createElement('img')
      img.onload = () => {
        this.localSrc = this.src
      }
      img.onerror = () => {
        this.localSrc = this.defaultSrc
      }
      img.src = this.src
    }
  }
}
</script>

<style scoped>

</style>
