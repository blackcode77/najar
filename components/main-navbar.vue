<template>
  <header class="d-flex items-center justify-between">
    <div class="main-logo d-flex items-center">
      <img src="@/assets/imgs/logo-40-yellow.png" alt="" class="mr-10" />

      <span class="fz-30 accent-main-color bold white">
        NAJAR <span class="accent-text">LTD</span>
      </span>
    </div>

    <nav class="white">
      <el-menu
          :default-active="activeIndex2"
          class="main-menu"
          mode="horizontal"
          @select="handleSelect"
          background-color="unset"
          text-color="#fff"
          active-text-color="#ff8c00">
        <el-menu-item index="1">Home</el-menu-item>

        <el-submenu index="2">
          <template slot="title">Service</template>

          <el-menu-item index="2-1">Intermodal shipping</el-menu-item>

          <el-menu-item index="2-2">Project logistic</el-menu-item>

          <el-menu-item index="2-3">Ship and cargo agency</el-menu-item>

          <el-menu-item index="2-4">customs clearance services</el-menu-item>
        </el-submenu>

        <el-menu-item index="3">Schedule and rates</el-menu-item>

        <el-menu-item index="4">Contacts</el-menu-item>

        <el-menu-item index="5">About us</el-menu-item>


      </el-menu>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="sass">
  @import "@/assets/css/vars"

  .main-menu
    &.el-menu
      &.el-menu--horizontal
        border-bottom: unset
    .el-menu-item, .el-submenu__title
      &:hover
        background-color: unset !important
        color: $accent-text !important
</style>
