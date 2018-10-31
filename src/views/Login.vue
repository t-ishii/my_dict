<template>
  <el-form :model="form" :rules="formRule" label-width="120px" class="login">
    <el-form-item label="Email" prop="email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import validate from '@/utils/validator'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      formRule: {
        email: [{ validator: validate.validateEmpty, trigger: 'blur' }],
        password: [{ validator: validate.validateEmpty, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 500px;
}
</style>
