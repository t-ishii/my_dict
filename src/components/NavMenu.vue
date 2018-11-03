<template>
  <el-menu :default-active="activeIndex" :router="true" mode="horizontal" @select="handleSelect">
    <template v-if="isLogin">
      <li role="menuitem" class="el-menu-item"><el-input 
        placeholder="Keyword"
        @input="handleInputKeyword"
        v-model="keyword"
        suffix-icon="el-icon-search"></el-input></li>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
      </el-menu-item>
      <el-menu-item index="/new">
        <i class="el-icon-circle-plus-outline"></i>
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
      keyword: '',
      activeIndex: '/'
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin
    }
  },
  methods: {
    handleSelect (key) {
      if (key === '/login') {
        firebase.auth().signOut()
      }
    },
    handleInputKeyword() {
      this.$store.commit('user/setSearchKeyword', this.keyword)
    }
  }
}
</script>
