<template>
  <el-row>
    <el-col>
      <el-input
        size="small"
        placeholder="keyword..."
        v-model="keyword"
        class="input-keyword"
        prefix-icon="el-icon-search"></el-input>
    </el-col>
    <el-col>
      <keyword-list :keyword="keyword"></keyword-list>
    </el-col>
  </el-row>
</template>

<script>
import KeywordList from '@/components/KeywordList.vue'

export default {
  name: 'home',
  components: { KeywordList },
  data() {
    return {
      keyword: ''
    }
  }
}
</script>

<style>
.input-keyword {
  max-width: 30em;
}
</style>
