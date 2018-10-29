<template>
  <el-menu :default-active="activeIndex" :router="true" mode="horizontal">
    <li role="menuitem" class="el-menu-item"><el-input 
      placeholder="Keyword"
      suffix-icon="el-icon-search"></el-input></li>
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex: 'home'
    }
  }
}
</script>
