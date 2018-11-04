<template>
  <el-menu :default-active="activeMenu" :router="true" mode="horizontal" @select="handleSelect">
    <template v-if="isLogin">
      <el-menu-item index="/home" id="nav-home">
        <i class="el-icon-menu"></i>
      </el-menu-item>
      <el-menu-item index="/new" id="nav-new">
        <i class="el-icon-edit"></i>
      </el-menu-item>
    </template>
    <el-menu-item index="/about" id="nav-about">
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
      keyword: '',
      activeMenu: '/home'
    }
  },
  watch: {
    '$route': 'updateActiveMenu'
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin
    }
  },
  methods: {
    resetActiveMenu() {
      const activeMenu = document.querySelector('header .is-active')
      if (activeMenu !== null) {
        activeMenu.classList.remove('is-active')
      }
    },
    setActiveMenu(menuId) {
      const menuItem = document.querySelector(menuId)
      if (menuItem !== null) {
        menuItem.classList.add('is-active')
      }
    },
    updateActiveMenu() {
      this.activeMenu = location.hash.replace('#', '').replace(/\?.+$/, '')
      let targetId = null

      if (this.activeMenu === '/home') {
        targetId = '#nav-home'
      } else if (this.activeMenu === '/new') {
        targetId = '#nav-new'
      } else if (this.activeMenu === '/about') {
        targetId = '#nav-about'
      }

      if (targetId !== null) {
        this.resetActiveMenu()
        this.setActiveMenu(targetId)
      }
    },
    handleSelect(key) {
      if (key === '/login') {
        firebase.auth().signOut()
      }
    }
  }
}
</script>
