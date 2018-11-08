<template>
  <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane label="form" name="form">
      <el-form :model="form" ref="form" :rules="formRule" label-width="120px">
        <el-form-item label="Keyword" :required="true" prop="keyword">
          <el-input v-model="form.keyword" class="input-keyword"></el-input>
        </el-form-item>
        <el-form-item label="Description" :required="true" prop="description">
          <el-input type="textarea" v-model="form.description" :rows="15"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ submitButton }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="preview" name="preview">
      <preview :text="form.description"></preview>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Preview from '@/components/Preview.vue'
import validate from '@/utils/validator'
import MyDict from '@/utils/MyDict'
import tools from '@/utils/tools'

export default {
  name: 'EditDict',
  components: { Preview },
  data() {
    const isExistsQuery = !!this.$route.query.id

    let keyword = ''
    let description = ''
    let id = ''

    if (isExistsQuery) {
      let dict = this.$store.getters['dict/find'](this.$route.query.id)
      id = dict.id
      keyword = dict.keyword
      description = dict.description
    }

    return {
      activeName: 'form',
      form: {
        id: id,
        keyword: keyword,
        description: description,
      },
      formRule: {
        keyword: [
          { validator: validate.validateEmpty, trigger: 'blur' }
        ],
        description: [
          { validator: validate.validateEmpty, trigger: 'blur' }
        ]
      },
      submitButton: isExistsQuery ? 'Update' : 'Create'
    }
  },
  watch: {
    '$route': 'updateForm'
  },
  methods: {
    resetForm() {
      this.form.id = ''
      this.form.keyword = ''
      this.form.description = ''
      this.submitButton = 'Create'
    },
    updateForm() {
      const hash = tools.getLocationHash()
      if (hash === '/new') {
        this.resetForm()
        this.$nextTick().then(() => {
          this.$refs.form.clearValidate()
        })
      }
    },
    onSubmit() {
      const btnType = this.submitButton
      let promise = null

      this.$refs.form.validate(valid => {
        if (valid) {

          if (btnType === 'Create') {
            promise = MyDict.insert(
              this.$store.state.user.uid,
              this.form
            )
          } else if (btnType === 'Update') {
            promise = MyDict.update(
              this.$store.state.user.uid,
              this.form
            )
          }

          if (promise !== null) {
            promise.then(() => {
              this.$router.push({ name: 'home' })
            })
          }

        }
      })
    }
  }
}
</script>

<style scoped>
.input-keyword {
  width: 100%;
  max-width: 600px;
}
</style>
