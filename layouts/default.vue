<template>
  <div :class="[sizeType]" class="page pt-10">
    <div class="container mt-15">
      <Navbar />
    </div>

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
                  NAJAR <span class="accent-text">LTD</span>
                </span>
              </div>

              <div class="mb-18">
                <i class="el-icon-location-information accent-text mr-10"></i>
                <span class="white">Jl. Sunset Road No.815, Kuta</span>
              </div>

              <div class="mb-18">
                <i class="el-icon-message accent-text mr-10"></i>
                <span class="white">mail@najar.com</span>
              </div>

              <div class="mb-18">
                <i class="el-icon-phone accent-text mr-10"></i>
                <span class="white">(+89)123-23-67</span>
              </div>
            </div>

            <div class="footer-item">
              <div class="footer-item_link">
                <h4 class="fz-20 accent-text">Quick Links</h4>

                <div class="delimiter-border" style="width: 70px;"></div>

                <div class="footer-item_data mt-15">
                  <NuxtLink class="link mb-18" to="/about">About us</NuxtLink>

                  <NuxtLink class="link mb-18" to="/services">Services</NuxtLink>

                  <NuxtLink class="link mb-18" to="/contacts">Contact</NuxtLink>
                </div>
              </div>
            </div>

            <div class="footer-item">
              <div class="footer-item_link">
                <h4 class="fz-20 accent-text">Useful Links</h4>

                <div class="delimiter-border" style="width: 70px;"></div>
              </div>
            </div>

            <div class="footer-item">
              <div class="footer-item_link">
                <h4 class="fz-20 accent-text">Work hours</h4>

                <div class="delimiter-border" style="width: 70px;"></div>

                <div class="mb-18 mt-15">
                  <i class="el-icon-time accent-text mr-10"></i>
                  <span class="white">9 AM - 5 PM , Monday - Saturday</span>
                </div>

                <p class="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, culpa</p>
              </div>
            </div>
          </div>

          <div class="delimiter-border mb-20 mt-10" style="width: 100%;"></div>

          <p class="white text-right text-lighter">
            Copyright © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import Navbar from "~/components/main-navbar";

export default {
  components: {Navbar},

  data: () => ({
    sizeType: ''
  }),

  computed: {
    ...mapState({
      windowSizeType: state => state.modules.common.window.sizeType,
    }),

    isScrolling() {
      return process.client ? this.isWindowScrolling : false
    },

    pageName() {
      return this.$route.name
    }
  },

  watch: {
    windowSizeType() {
      this.setWindowType()
    }
  },

  mounted() {
    this.setWindowType()
  },

  methods: {
    setWindowType() {
      if (process.client) {
        this.sizeType = this.windowSizeType
      }
    }
  }
}
</script>

<style lang="sass">
  .page
    min-height: 100vh
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
</style>
