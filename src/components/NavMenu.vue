<template>
  <div class="header-wrapper">
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
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/auth'

import tools from '@/utils/tools'

export default {
  name: 'NavMenu',
  data() {
    return {
      activeMenu: tools.getLocationHash()
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
        menuItem.style.borderBottomColor = null
        menuItem.classList.add('is-active')
      }
    },
    updateActiveMenu() {
      this.activeMenu = tools.getLocationHash()
      let targetId = null

      if (this.activeMenu === '/home') {
        targetId = '#nav-home'
      } else if (this.activeMenu === '/new') {
        targetId = '#nav-new'
      } else if (this.activeMenu === '/about') {
        targetId = '#nav-about'
      }

      if (targetId !== null) {
        this.$nextTick().then(() => {
          this.resetActiveMenu()
          this.setActiveMenu(targetId)
        })
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

<style scoped>
.header-wrapper {
  position: fixed;
  width: 100%;
  z-index: 1500;
}
</style>
