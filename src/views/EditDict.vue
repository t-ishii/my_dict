<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="form" name="form">
      <el-form :model="form" ref="form" :rules="formRule" label-width="120px" class="create-form">
        <el-form-item label="Keyword" :required="true" prop="keyword">
          <el-input v-model="form.keyword"></el-input>
        </el-form-item>
        <el-form-item label="Description" :required="true" prop="description">
          <el-input type="textarea" v-model="form.description" :rows="5"></el-input>
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

export default {
  name: 'EditDict',
  components: { Preview },
  data() {
    const keywords = this.$route.query.keywords
    return {
      activeName: 'form',
      form: {
        keyword: keywords ? keywords.keyword : '',
        description: keywords ? keywords.description : '',
        id: keywords ? keywords.id : ''
      },
      formRule: {
        keyword: [
          { validator: validate.validateEmpty, trigger: 'blur' }
        ],
        description: [
          { validator: validate.validateEmpty, trigger: 'blur' }
        ]
      },
      submitButton: keywords ? 'Update' : 'Create'
    }
  },
  methods: {
    onSubmit() {
      const btnType = this.submitButton
      let promise = null
      
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
  }
}
</script>

<style scoped>
.create-form {
  width: 100%;
  max-width: 600px;
}
</style>
