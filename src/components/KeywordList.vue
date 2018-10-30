<template>
  <el-table :data="keywords" style="width: 100%;">
    <el-table-column prop="keyword" label="keyword"></el-table-column>
    <el-table-column prop="description" label="description"></el-table-column>
    <el-table-column label="">
      <template slot-scope="scope">
        <el-button icon="el-icon-delete" circle @click="handleClickDelete(scope.$index, scope.row)"></el-button>
        <el-button icon="el-icon-edit" circle @click="handleClickEdit(scope.$index, scope.row)"></el-button>
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
  },
  methods: {
    handleClickDelete(index, row) {
      console.log([index, row])
    },
    handleClickEdit(index, row) {
      console.log([index, row])
    }
  }
}
</script>
