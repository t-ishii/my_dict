<template>
  <div class="keyword-list">
    <el-table :data="keywords" style="width: 100%;" @row-click="handleSelectRow">
      <el-table-column prop="keyword" label="keyword"></el-table-column>
      <el-table-column prop="description" label="description"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="slot">
          <el-input
            v-model="keyword"
            size="mini"
            placeholder="keyword"/>
        </template>
        <template slot-scope="scope">
          <el-button icon="el-icon-edit" type="info" circle @click.stop="handleClickEdit(scope.$index, scope.row)"></el-button>
          <el-button icon="el-icon-delete" type="danger" circle @click.stop="handleClickDelete(scope.$index, scope.row)"></el-button>
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

    <el-dialog
      :visible.sync="previewDialogVisible">
      <preview :text="selectRow.description"></preview>
    </el-dialog>
  </div>
</template>

<script>
import MyDict from '@/utils/MyDict'
import store from '@/store'
import Preview from '@/components/Preview.vue'

const callbackDictList = (snapshot) => {
  if (snapshot.exists()) {
    store.dispatch('dict/refresh', Object.values(snapshot.val()))
  } else {
    store.dispatch('dict/refresh', [])
  }
}

export default {
  name: 'KeywordList',
  components: {
    Preview
  },
  created() {
    MyDict.listen(this.$store.state.user.uid, callbackDictList)
    if (this.$store.state.dict.dicts.length === 0) {
      this.$store.dispatch('dict/load', this.$store.state.user.uid)
    }
  },
  destroyed() {
    MyDict.unListen(this.$store.state.user.uid, callbackDictList)
  },
  data() {
    return {
      previewDialogVisible: false,
      deleteDialogVisible: false,
      deleteRow: {},
      selectRow: {
        keyword: '',
        description: ''
      },
      keyword: ''
    }
  },
  computed: {
    keywords() {
      const searchKeyword = this.keyword.toLowerCase()
      return this.$store.state.dict.dicts.filter(dict => {
        return searchKeyword === '' || dict.keyword.toLowerCase().includes(searchKeyword)
      })
    }
  },
  methods: {
    handleSelectRow(row) {
      this.previewDialogVisible = true
      this.selectRow = row
    },
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
      this.$store.commit('user/setActiveMenu', '/new')
      this.$router.push({ name: 'edit', query: { keyword: row.keyword }})
    }
  }
}
</script>
