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
          <el-button type="primary" @click="onSubmit">Create</el-button>
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

export default {
  name: 'EditDict',
  components: { Preview },
  props: {
    form: {
      type: Object,
      default: {
        keyword: '',
        description: ''
      }
    }
  },
  data() {

    const validateEmpty = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(`Please input the ${rule.field}`))
      }
      callback()
    }

    return {
      activeName: 'form',
      form: {
        keyword: '',
        description: ''
      },
      formRule: {
        keyword: [
          { validator: validateEmpty, trigger: 'blur' }
        ],
        description: [
          { validator: validateEmpty, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit')
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
