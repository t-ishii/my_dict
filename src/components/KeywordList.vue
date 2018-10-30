<template>
  <div class="keyword-list">
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

    <el-dialog
      :visible.sync="deleteDialogVisible"
      title="削除確認"
      width="30%">
      <span>{{ deleteKeyword }}を削除してもよろしいですか？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="deleteDialogVisible = false">OK</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'KeywordList',
  data() {
    return {
      deleteDialogVisible: false,
      deleteKeyword: '',
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
      this.deleteKeyword = row.keyword
      this.deleteDialogVisible = true
      console.log([index, row])
    },
    handleClickEdit(index, row) {
      const send = {
        keyword: row.keyword,
        description: row.description
      }
      this.$router.push({ name: 'edit', query: { keywords: send }})
    }
  }
}
</script>
