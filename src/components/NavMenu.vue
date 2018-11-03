<template>
  <el-menu :default-active="activeMenu" :router="true" mode="horizontal" @select="handleSelect">
    <template v-if="isLogin">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
      </el-menu-item>
      <el-menu-item index="/new">
        <i class="el-icon-edit"></i>
      </el-menu-item>
    </template>
    <el-menu-item index="/about">
      <i class="el-icon-question"></i>
    </el-menu-item>
    <template v-if="isLogin">
      <el-submenu index="setting">
        <template slot="title"><i class="el-icon-setting"></i></template>
        <el-menu-item index="/login">logout</el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>
import firebase from 'firebase'
import 'firebase/auth'

export default {
  name: 'NavMenu',
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin
    },
    activeMenu: {
      set(menuId) {
        console.log(`set: ${menuId}`)
        this.$store.commit('user/setActiveMenu', menuId)
      },
      get() {
        console.log(`get: ${this.$store.state.user.activeMenu}`)
        return this.$store.state.user.activeMenu
      }
    }
  },
  methods: {
    handleSelect (key) {
      if (key === '/login') {
        firebase.auth().signOut()
      }
    }
  }
}
</script>
