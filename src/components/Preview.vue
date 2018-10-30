<template>
  <div class="preview" v-html="preview">
  </div>
</template>

<script>
import showdown from 'showdown'

export default {
  name: 'Preview',
  props: {
    text: ''
  },
  computed: {
    preview() {
      const converter = new showdown.Converter()
      return converter.makeHtml(this.text)
    }
  }
}
</script>
