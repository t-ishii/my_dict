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
      <span>{{ deleteRow.keyword }}を削除してもよろしいですか？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="doDelete">OK</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import MyDict from '@/utils/MyDict'
import store from '@/store'

const callbackDictList = (snapshot) => {
  const dicts = snapshot.val()
  if (dicts) {
    store.dispatch('dict/refresh', Object.values(dicts))
  } else {
    store.dispatch('dict/refresh',[])
  }
}

export default {
  name: 'KeywordList',
  created() {
    MyDict.listen(this.$store.state.user.uid, callbackDictList)
    this.$store.dispatch('dict/load', this.$store.state.user.uid)
  },
  destroyed() {
    MyDict.unListen(this.$store.state.user.uid, callbackDictList)
  },
  data() {
    return {
      deleteDialogVisible: false,
      deleteRow: {},
    }
  },
  computed: {
    keywords() {
      return this.$store.state.dict.dicts
    }
  },
  methods: {
    handleClickDelete(index, row) {
      this.deleteRow = row
      this.deleteDialogVisible = true
    },
    doDelete() {
      this.deleteDialogVisible = false
      MyDict.delete(
        this.$store.state.user.uid,
        this.deleteRow.keyword
      )
    },
    handleClickEdit(index, row) {
      const send = {
        keyword: row.keyword,
        description: row.description,
      }
      this.$router.push({ name: 'edit', query: { keywords: send }})
    }
  }
}
</script>
