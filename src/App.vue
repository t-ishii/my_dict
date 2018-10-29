<template>
  <el-container>
    <el-header>
      <nav-menu></nav-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
import NavMenu from '@/components/NavMenu.vue'

export default {
  components: { NavMenu }
}
</script>
