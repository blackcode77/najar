<template>
  <div>
    <MainSection>
      <div class="page-header">
        Schedule and rates
      </div>
    </MainSection>

    <div class="service-section" style="min-height: 400px">
      <div class="container page-container">
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
import SiteMixin from '~/mixins/page-data-mixin'
import MainSection from "@/components/MainSection";

export default {
  name: 'SchedulePage',
  mixins: [SiteMixin],
  components: { MainSection },

  computed: {
    path() {
      return 'site.pages.schedule'
    }
  }
}
</script>

<style lang="sass">
</style>
