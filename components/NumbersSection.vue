<template>
  <section class="numbers-section">
    <div class="container">
      <div class="numbers-section_inner white">
        <div
            v-for="(tip, k) in tips"
            :key="k"
            class="numbers-section_inner-item"
        >
        <span class="fz-50">
          <i
              @click="edit(tip.path + '.icon', 'icons')"
              :class="[editMode ? 'editable' : '', tip.icon]"
          ></i>
        </span>
          <span
              @click="edit(tip.path + '.text_bold', 'simple')"
              :class="{'editable': editMode}"
              class="bold fz-30"
          >{{ tip.text_bold }}</span>

          <span
              @click="edit(tip.path + '.text_small', 'simple')"
              :class="{'editable': editMode}"
          >{{ tip.text_small }}</span>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import PageDataMixin from "@/mixins/page-data-mixin";

export default {
  name: 'NumbersSection',

  mixins: [PageDataMixin],

  computed: {
    path() {
      return 'site.pages.main.sections.numbers'
    },

    tips() {
      return this.resolveData(`${this.path}.tips`)
    }
  }
}
</script>

<style lang="sass">
@import "@/assets/css/vars"
.carousel-inner
  max-width: 350px
  padding: 20px

.numbers-section_inner
  display: flex
  max-width: 1000px
  justify-content: space-between
  align-items: center
  background-color: #142f36cc
  padding: 20px
  margin: -40px auto 0
  margin-bottom: 40px

  .numbers-section_inner-item
    display: flex
    flex-direction: column
    flex-wrap: wrap
    align-items: center
    justify-content: center
    width: 25%

.el-carousel__item
  border: 1px solid #00000030
  background-color: #fff

</style>
