<template>
  <section class="about-section pt-50 mb-20" style="background-color: #f7f7f7;">
    <div class="container mb-20">
      <div class="about-section_inner text-center mb-30">
        <p
            @click="edit(path + '.sub_title', 'simple')"
            :class="{'editable': editMode}"
            class="text-uppercase accent-text text-center mb-10"
        >{{ resolveData(path + '.sub_title') }}</p>

        <h3
            @click="edit(path + '.title', 'simple')"
            :class="{'editable': editMode}"
            class="about-section_title fz-30 text-uppercase bold text-center mb-10"
        >{{ resolveData(path + '.title') }}</h3>

        <span class="about-section_delimiter"></span>
      </div>

      <p
          @click="edit(path + '.title2', 'simple')"
          :class="{'editable': editMode}"
          class="text-center text-lighter mb-30" style="max-width: 500px; margin: 0 auto;"
      >{{ resolveData(path + '.title2') }}</p>

      <div class="about-section_info container">
        <div class="about-section_info-block">
          <ul class="why-points">
            <li
                v-for="(tip, k) in tips"
                :key="k"
                class="why-point"
            >
              <div class="why-point_left">
                <h4
                  @click="edit(tip.path + '.text1', 'simple')"
                  :class="{'editable': editMode}"
                  class="mb-10 fz-20"
                >{{ tip.text1 }}</h4>

                <p
                  @click="edit(tip.path + '.text2', 'editor')"
                  :class="{'editable': editMode}"
                  class="lh-16"
                  v-html="tip.text2"
                ></p>
              </div>
              <div class="why-point_right accent-text">
                <i class="el-icon-check"></i>
              </div>
            </li>
          </ul>
        </div>

        <div class="about-section_info-block about-section_info-block-icon text-center">
          <div class="about-section_info-block-icon-cnt">
            <NajarLogo width="200" height="200" class="mr-10"/>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>


<script>
import PageDataMixin from "@/mixins/page-data-mixin";

export default {
  name: 'WhyWeSection',

  mixins: [PageDataMixin],

  computed: {
    path() {
      return 'site.pages.main.sections.why'
    },

    tips() {
      return this.resolveData(`${this.path}.tips`)
    }
  }
}
</script>

<style lang="sass">
@import "@/assets/css/vars"

.why-point
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 25px

  .why-point_left
    text-align: right

  .why-point_right
    padding: 20px

.about-section_info-block-icon
  align-self: center

  .about-section_info-block-icon-cnt
    margin: 0 auto

</style>
