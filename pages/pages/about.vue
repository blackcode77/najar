<template>
  <div>
    <MainSection>
      <div class="page-header">
        About us
      </div>
    </MainSection>

    <div class="service-section" style="min-height: 400px">
      <div class="container">
        Foo
      </div>
    </div>
  </div>
</template>

<script>
import SiteMixin from '~/mixins/page-data-mixin'
import MainSection from "@/components/MainSection";

export default {
  name: 'AboutPage',
  mixins: [SiteMixin],
  components: { MainSection }
}
</script>

<style lang="sass">
</style>
