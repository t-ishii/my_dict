<template>
  <el-menu :default-active="activeIndex" :router="true" mode="horizontal" @select="handleSelect">
    <li role="menuitem" class="el-menu-item"><el-input 
      placeholder="Keyword"
      suffix-icon="el-icon-search"></el-input></li>
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
    </el-menu-item>
    <el-menu-item index="/new">
      <i class="el-icon-circle-plus-outline"></i>
    </el-menu-item>
    <el-menu-item index="/about">
      <i class="el-icon-question"></i>
    </el-menu-item>
    <el-submenu index="setting">
      <template slot="title"><i class="el-icon-setting"></i></template>
      <el-menu-item index="/login">logout</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import firebase from 'firebase'
import 'firebase/auth'

export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex: '/'
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
