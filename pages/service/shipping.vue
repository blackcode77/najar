<template>
  <div>
    <MainSection>
      <div class="page-header">
        Intermodal shipping
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
import SiteMixin from '~/mixins/page-data-mixin'
import MainSection from "@/components/MainSection";

export default {
  name: 'ShippingPage',
  mixins: [SiteMixin],
  components: { MainSection },

  computed: {
    path() {
      return 'site.pages.services.shipping'
    }
  }
}
</script>

<style lang="sass">
</style>
