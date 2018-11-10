<template>
  <el-dialog
    :visible.sync="isShowConfirm"
    :title="title">
    <span>{{ question }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="pressedNg">Cancel</el-button>
      <el-button @click="pressedOk">OK</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    title: {
      type: String,
      required: true
    },
    isShow: {
      type: Boolean,
      default: false
    },
    question: {
      type: String,
      required: true
    }
  },
  computed: {
    isShowConfirm: {
      get() {
        return this.isShow
      },
      set(val) {
        this.$emit('update:isShow', val)
      }
    }
  },
  methods: {
    pressedNg() {
      this.$emit('pressed-ng')
    },
    pressedOk() {
      this.$emit('pressed-ok')
    }
  }
}
</script>
