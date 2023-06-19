<template>
  <div class="inner-container">


    <Navbar class="relative-flow" />

    <main class="relative-flow">
      <Nuxt />
    </main>

    <div v-if="false" class="main-bg_outer">
      <div class="main-bg_image"></div>
    </div>
  </div>
</template>

<script>

import Navbar from "~/components/main-navbar";

export default {
  components: {Navbar}
}
</script>

<style lang="sass">
  .main-bg_outer
    position: absolute
    top: 0
    left: 0
    right: 0
    height: 90vh
    background-color: #042b34
    z-index: 100
  .main-bg_image
    position: absolute
    top: 0
    height: 100%
    left: 0
    right: 0
    background-image: url("@/assets/imgs/bg-square.png")
    background-position: center center
    background-size: cover
    opacity: 0.75
    mix-blend-mode: overlay
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s
</style>
