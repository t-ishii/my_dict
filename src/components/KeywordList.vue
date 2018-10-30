<template>
  <el-table :data="keywords" style="width: 100%;">
    <el-table-column prop="keyword" label="keyword"></el-table-column>
    <el-table-column prop="description" label="description"></el-table-column>
    <el-table-column label="">
      <template slot-scope="scope">
        <el-button icon="el-icon-delete" circle></el-button>
        <el-button icon="el-icon-edit" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'KeywordList',
  data() {
    return {
      keywords: [
        {
          keyword: 'TEST',
          description: 'Sample'
        },
        {
          keyword: 'TEST',
          description: 'Sample'
        },
        {
          keyword: 'TEST',
          description: 'Sample'
        },
        {
          keyword: 'TEST',
          description: 'Sample'
        }
      ]
    }
  }
}
</script>
