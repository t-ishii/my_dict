<template>
  <el-form :model="form" :rules="formRule" label-width="120px" class="login" ref="loginForm">
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

import firebase from 'firebase'
import 'firebase/auth'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      formRule: {
        email: [
          { validator: validate.validateEmpty, trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change']}
        ],
        password: [{ validator: validate.validateEmpty, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          firebase.auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password)
          .then((userCredential) => {
            console.log(userCredential.credential)
            this.$router.push({name: 'home'})
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 500px;
}
</style>
