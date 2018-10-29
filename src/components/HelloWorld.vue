<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <new-item></new-item>
  </div>
</template>

<script>
import NewItem from '@/components/NewItem.vue'

export default {
  name: 'HelloWorld',
  components: { NewItem },
  props: {
    msg: String
  }
}
</script>
