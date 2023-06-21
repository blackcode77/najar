<template>
  <section class="index-section-top mt-30">
    <div class="main-info relative-flow">
      <div class="container white">
        <p
            @click="edit('site.pages.main.sections.top.title1', 'simple')"
            :class="{'editable': editMode}" class="main-info_p1 ext-uppercase mb-10">
          {{ resolveData('site.pages.main.sections.top.title1') }}
        </p>

        <p @click="edit('site.pages.main.sections.top.title2', 'simple')" :class="{'editable': editMode}" class="main-info_p2 text-uppercase fz-30 bold mb-10">{{ resolveData('site.pages.main.sections.top.title2') }}</p>

        <p @click="edit('site.pages.main.sections.top.title3', 'simple')" :class="{'editable': editMode}" class="main-info_p3 text-uppercase fz-50 bold mb-10">{{ resolveData('site.pages.main.sections.top.title3') }}</p>

        <p @click="edit('site.pages.main.sections.top.text', 'simple')" :class="{'editable': editMode}" class="main-info_p4">{{ resolveData('site.pages.main.sections.top.text') }}</p>
      </div>
    </div>
  </section>
</template>


<script>
import SiteMixin from "@/mixins/page-data-mixin";

export default {
  name: 'MainSection',

  mixins: [SiteMixin],
}
</script>

<style lang="sass">
  .main-info
    padding: 0 30px  100px 100px
  .main-info_p4
    max-width: 400px

  .index-section-top
    background-image: url("@/assets/imgs/containers.jpg")
    background-position: center center
    background-size: cover
    position: relative
    margin-top: -70px
    padding-top: 165px
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
    .index-section-top_inner
      background-color: #041755
      opacity: .2

  .main-bg_outer
    position: absolute
    top: 0
    left: 0
    right: 0
    height: 100%
    padding-bottom: 100px
    background-color: #041c34
    z-index: -100
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

  .big-logo_outer
    position: absolute
    top: 0
    width: 100%
  .big-logo
    opacity: .1
</style>
