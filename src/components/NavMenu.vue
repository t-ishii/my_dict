<template>
  <el-menu :default-active="activeIndex" :router="true" mode="horizontal">
    <li role="menuitem" class="el-menu-item"><el-input 
      placeholder="Keyword"
      suffix-icon="el-icon-search"></el-input></li>
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
    </el-menu-item>
    <el-menu-item index="/edit">
      <i class="el-icon-circle-plus-outline"></i>
    </el-menu-item>
    <el-menu-item index="/about">
      <i class="el-icon-question"></i>
    </el-menu-item>
  </el-menu>
</template>
<script>

export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex: '/'
    }
  }
}
</script>
