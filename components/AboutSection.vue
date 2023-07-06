<template>
  <section class="about-section pt-50 mb-20">
    <div class="container mb-20">
      <div class="about-section_inner text-center">
        <p
          @click="edit(path + '.sub_title', 'simple')"
          :class="{'editable': editMode}"
          class="text-uppercase accent-text text-center mb-10"
        >
          {{ resolveData(path + '.sub_title') }}
        </p>

        <h3
          @click="edit(path + '.title', 'simple')"
          :class="{'editable': editMode}"
          class="about-section_title fz-30 text-uppercase bold text-center mb-10"
        >
          {{ resolveData(path + '.title') }}
        </h3>

        <span class="about-section_delimiter"></span>
      </div>
    </div>

    <div class="about-section_info container">
      <div class="about-section_info-block">
        <div
            @click="edit(`${path}.text`, 'editor')"
            :class="{'editable': editMode}"
            class="mb-30"
            v-html="resolveData(`${path}.text`)"
        />


        <ul class="about-section_list">
          <li
              v-for="(tip, k) in tips"
              :key="k"
          >
            <i class="el-icon-info"></i>
            <span
              @click="edit(tip.path + '.text', 'simple')"
              :class="{'editable': editMode}"
            >{{ tip.text }}</span>
          </li>
        </ul>
      </div>
      <div class="about-section_info-block about-section_info-block-carousel">
        <el-carousel height="350px" style="overflow-y: hidden">
          <el-carousel-item>
            <img src="@/assets/imgs/slider/truck.jpg" alt="">
          </el-carousel-item>

          <el-carousel-item>
            <img src="@/assets/imgs/slider/logistics.jpg" alt="">
          </el-carousel-item>

          <el-carousel-item>
            <img src="@/assets/imgs/slider/air-freight.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>
</template>


<script>
import PageDataMixin from "@/mixins/page-data-mixin";

export default {
  name: 'AboutSection',
  mixins: [PageDataMixin],

  computed: {
    path() {
      return 'site.pages.main.sections.about_us'
    },

    tips() {
      return this.resolveData(`${this.path}.tips`)
    }
  }
}
</script>

<style lang="sass">
  @import "@/assets/css/vars"

  .about-section
    padding-bottom: 30px
  .about-section_inner
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  .about-section_delimiter
    display: inline-block
    width: 70px
    border: 1px solid $accent-text
  .about-section_info
    padding-top: 30px
    display: flex
    .about-section_info-block
      width: 50%
    .about-section_info-block-carousel
      padding: 20px
    .about-section_list
      li
        margin-bottom: 20px
        i
          margin-right: 10px
          color: $accent-text
  .page
    &.sm, &.xs
    &.xs
      .about-section_info
        flex-direction: column
        align-items: center
        .about-section_info-block
          width: 95%
</style>
