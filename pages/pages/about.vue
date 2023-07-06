<template>
  <div>
    <MainSection>
      <div class="page-header">
        About us
      </div>
    </MainSection>

    <div class="service-section" style="min-height: 400px">
      <div class="container">
        <div
          @click="edit(path + '.data', 'editor')"
          :class="{'editable': editMode}"
          v-html="resolveData(`${path}.data`)"
        />

      </div>
    </div>
  </div>
</template>

<script>
import PageDataMixin from '~/mixins/page-data-mixin'
import MainSection from "@/components/MainSection";

export default {
  name: 'AboutPage',

  mixins: [PageDataMixin],

  components: { MainSection },

  computed: {
    path() {
      return 'site.pages.about'
    }
  }
}
</script>

<style lang="sass">
</style>
