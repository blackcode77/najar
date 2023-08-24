<template>
  <div :class="{'header-container__dark': pageYOffset > 40}" class="header-container">
    <div class="container">
      <header class="d-flex items-center justify-between">
        <div @click="goToIndex" class="pointer main-logo d-flex items-center">
          <NajarLogo
              class="mr-10"
              width="50"
              height="50"
          />

          <span @click="edit('site.logo.part1', 'simple')"
                :class="{'editable': editMode}" class="fz-30 mr-10 accent-main-color bold white">
            {{ resolveData('site.logo.part1') }}
          </span>

          <span @click="edit('site.logo.part2', 'simple')"
                :class="{'editable': editMode}" class="accent-text fz-30">
            {{ resolveData('site.logo.part2') }}
          </span>
        </div>

        <nav :class="{'main-menu__close': isMenuClose}" class="main-menu white">
          <div @click="isMenuClose = true" class="close-menu md-hidden lg-hidden white fz-25 float-right d-inline-block">
            <i class="el-icon-close"></i>
          </div>

          <el-menu
              :default-active="activeIndex2"
              class="main-menu_inner"
              :router="true"
              :mode="menuMode"
              @select="handleSelect"
              background-color="unset"
              text-color="#fff"
              active-text-color="#ff8c00"
          >
            <el-menu-item index="/">Home</el-menu-item>

            <el-submenu index="/service">
              <template slot="title">Service</template>

              <el-menu-item index="/service/shipping">Intermodal shipping</el-menu-item>

              <el-menu-item index="/service/logistic">Project logistic</el-menu-item>

              <el-menu-item index="/service/cargo">Ship and cargo agency</el-menu-item>
            </el-submenu>

            <el-menu-item index="/pages/contacts">Contacts</el-menu-item>

            <el-menu-item index="/pages/about">About us</el-menu-item>
          </el-menu>
        </nav>

        <div v-show="isMenuClose" @click="isMenuClose = false" class="hamburger md-hidden lg-hidden">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </header>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";
import PageType from "~/mixins/element-mixin";
import SiteMixin from "@/mixins/page-data-mixin";

export default {
  name: 'MainNavbar',
  mixins: [PageType, SiteMixin],
  data() {
    return {
      activeIndex: '1',
      isMenuClose: true
    };
  },
  methods: {
    goToIndex () {
      this.$router.push('/')
    },

    handleSelect(key, keyPath) {
      if (this.pageTypeIs(['sm', 'xs'])) {
        this.isMenuClose = true
      }
    }
  },
  computed: {
    ...mapState({
      pageYOffset: state => state.modules.common.window.pageYOffset,
    }),

    activeIndex2 () {
      return this.$route.path
    },

    menuMode() {
      return this.pageTypeIs(['sm', 'xs']) ? 'vertical' : 'horizontal'
    }
  },
}
</script>

<style lang="sass">
  @import "@/assets/css/vars"

  .header-container
    position: fixed
    z-index: 1000000
    left: 0
    right: 0
    padding: 10px
    &.header-container__dark
      background-color: black
  .main-menu_inner
    &.el-menu
      &.el-menu--horizontal
        border-bottom: unset
    .el-menu-item, .el-submenu__title
      &:hover
        background-color: unset !important
        color: $accent-text !important
  .page
    &.sm, &.xs
      .main-info
        padding: unset
        padding-bottom: 100px
      .main-logo
      .main-logo
        span
          font-size: 20px
      .el-menu
        border-right: unset
      nav
        position: fixed
        top: 0
        left: 0
        bottom: 0
        background-color: black
        padding-top: 30px
        z-index: 10000
        min-width: 300px
        &.main-menu__close
          display: none
    &.sm
    &.xs
      nav
        min-width: 100%
        .close-menu
          margin-right: 20px
    .close-menu
      padding: 5px
      margin-top: -30px
  .hamburger
    font: inherit
    display: inline-block
    overflow: visible
    margin: 0
    padding: 15px
    cursor: pointer
    text-transform: none
    color: inherit
    border: 0
    background-color: transparent
    .hamburger-box
      position: relative
      display: inline-block
      width: 40px
      height: 24px
      .hamburger-inner
        display: block
        margin-top: -2px
      .hamburger-inner
        top: 2px
        position: absolute
        width: 40px
        height: 4px
        transition-timing-function: ease
        transition-duration: .15s
        transition-property: transform
        border-radius: 4px
        background-color: #fff
      .hamburger-inner
        &::after, &::before
          top: 2px
          position: absolute
          width: 40px
          height: 4px
          transition-timing-function: ease
          transition-duration: .15s
          transition-property: transform
          border-radius: 4px
          background-color: #fff
      .hamburger-inner
        &::before
          top: 10px
          content: ""
          display: block
        &::after
          top: 20px
          content: ""
          display: block

</style>
