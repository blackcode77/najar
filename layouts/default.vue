<template>
  <div v-if="!isDataLoading" :class="[sizeType]" class="page">
    <Navbar />

    <main>
      <Nuxt />
    </main>

    <footer>
      <div class="footer-items container">
        <div class="footer-items_inner container relative">
          <div class="footer-items_inner-container d-flex items-between mb-10">
            <div class="footer-item">
              <div class="d-flex items-center mb-20">
                <NajarLogo width="50" height="50" class="mr-10" />

                <span class="fz-30 accent-main-color bold white no-wrap">
                  {{ resolveData('site.logo.part1') }} <span class="accent-text">{{ resolveData('site.logo.part2') }}</span>
                </span>
              </div>

              <div class="mb-18">
                <i class="el-icon-location-information accent-text mr-10"></i>
                <span
                    @click="edit(path + '.location', 'simple')"
                    :class="{'editable': editMode}"
                    class="white">{{ resolveData(path + '.location') }}</span>
              </div>

              <div class="mb-18">
                <i class="el-icon-message accent-text mr-10"></i>
                <span
                  @click="edit(path + '.email', 'simple')"
                  :class="{'editable': editMode}"
                  class="white"
                >{{ resolveData(path + '.email') }}</span>
              </div>

              <div class="mb-18">
                <i class="el-icon-phone accent-text mr-10"></i>
                <span
                  @click="edit(path + '.phone', 'simple')"
                  :class="{'editable': editMode}"
                  class="white"
                >{{ resolveData(path + '.phone') }}</span>
              </div>
            </div>

            <div class="footer-item">
              <div class="footer-item_link">
                <h4 class="fz-20 accent-text">Quick Links</h4>

                <div class="delimiter-border" style="width: 70px;"></div>

                <div class="footer-item_data mt-15">
                  <NuxtLink class="link mb-18" to="/pages/about">About us</NuxtLink>

                  <NuxtLink class="link mb-18" to="/service/logistic">Services</NuxtLink>

                  <NuxtLink class="link mb-18" to="/pages/contacts">Contact</NuxtLink>
                </div>
              </div>
            </div>

            <div class="footer-item">
              <div class="footer-item_link">
                <h4 class="fz-20 accent-text">Work hours</h4>

                <div class="delimiter-border" style="width: 70px;"></div>

                <div class="mb-18 mt-15">
                  <i class="el-icon-time accent-text mr-10"></i>
                  <span
                    @click="edit(path + '.work_hours', 'simple')"
                    :class="{'editable': editMode}"
                    class="white"
                  >{{ resolveData(path + '.work_hours') }}</span>
                </div>

                <p
                  @click="edit(path + '.work_hours_info', 'simple')"
                  :class="{'editable': editMode}"
                  class="white"
                >{{ resolveData(path + '.work_hours_info') }}</p>
              </div>
            </div>
          </div>

          <div class="delimiter-border mb-20 mt-10" style="width: 100%;"></div>

          <p class="white text-right text-lighter">
            Copyright © 2023. All rights reserved.
            <i
              v-if="false"
              @click="login"
              :class="{'el-icon-lock': !isLogged, 'el-icon-unlock': isLogged}"
              class="accent-text pointer"
            ></i>
          </p>
        </div>
      </div>
    </footer>

    <PageElementEditor />
  </div>
  <div class="main-preloader" v-else>
    <i class="el-icon-loading"></i>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import Navbar from "~/components/main-navbar";
import SiteMixin from '~/mixins/page-data-mixin'
import PageElementEditor from "@/components/PageElementEditor";

export default {
  components: {PageElementEditor, Navbar},

  mixins: [SiteMixin],

  data: () => ({
    sizeType: null,
  }),

  computed: {
    ...mapState({
      windowSizeType: state => state.modules.common.window.sizeType,
      pageYOffset: state => state.modules.common.window.pageYOffset,
      isDataLoading: state => state.modules.common.site.isLoading,
      isLogged: state => state.modules.common.user.isLogged,
    }),

    isScrolling() {
      return process.client ? this.isWindowScrolling : false
    },

    pageName() {
      return this.$route.name
    },

    path() {
      return 'site.footer'
    },
  },

  watch: {
    windowSizeType() {
      this.setWindowType()
    }
  },

  mounted() {
    this.load()
    this.setWindowType()
  },

  methods: {
    login() {
      this.$store.commit('modules/common/user/LOGIN', !this.isLogged)
    },
    load() {
      this.$store.dispatch('modules/common/site/FETCH_DATA')
    },

    setWindowType() {
      if (process.client) {
        this.sizeType = this.windowSizeType
      }
    }
  }
}
</script>

<style lang="sass">
  @import "@/assets/css/vars"
  .page
    min-height: 100vh
  main
    padding-top: 58px
  footer
    position: relative
    background-image: url("@/assets/imgs/sea.jpg")
    background-position: center center
    background-size: cover
    &:after
      content: ""
      position: absolute
      display: block
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: #00151a
      opacity: .8
    .footer-items
      position: relative
      z-index: 1000
      .footer-items_inner
        padding: 40px 0 20px 0
    .footer-item
      padding-right: 30px
      min-width: 180px
      .footer-item_link
        padding-top: 12px
      .footer-item_data
        a
          display: block
  .sm, .xs
    .footer-item
      min-width: 180px
      margin-bottom: 20px
    .footer-items_inner-container
      flex-direction: row
      flex-wrap: wrap
      justify-content: flex-start
  .xs
    .footer-item
      min-width: 100%
      padding-right: unset
  .main-preloader
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    height: 100vh
    .el-icon-loading
      font-size: 30px
      color: $accent-text
</style>
