<template>
  <section class="service-section">
    <div class="container">
      <div class="about-section_inner text-center mb-30">
        <h3
            @click="edit('site.pages.main.sections.serv.title', 'simple')"
            :class="{'editable': editMode}"
            class="about-section_title fz-30 text-uppercase bold text-center mb-10"
        >
          {{ resolveData('site.pages.main.sections.serv.title') }}
        </h3>

        <span class="about-section_delimiter"></span>
      </div>

      <div class="service-section-items-wrapper">
        <div v-for="item in items" :key="item.path" class="service-section-item">
          <span class="fz-50 mb-10">
            <i
              @click="edit(item.path + '.icon', 'icons')"
              :class="[editMode ? 'editable' : '', item.icon]"
            ></i>
          </span>

          <h3
              @click="edit(item.path + '.h3', 'simple')"
              :class="{'editable': editMode}"
              class="mb-20"
          >
            {{ item.h3 }}
          </h3>

          <p
              @click="edit(item.path + '.p', 'simple')"
              :class="{'editable': editMode}"
              class="text-center mb-20"
          >
            {{ item.p }}
          </p>

          <a class="service-section_link white" :href="item.link">
            READ MORE
          </a>
          <Editable
            v-if="editMode"
            class="p-5px"
            :path="item.path + '.link'"
          >
            <span class="ml-10">Edit link</span>
          </Editable>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import PageDataMixin from "@/mixins/page-data-mixin";
import Editable from "@/components/EditableData";

export default {
  name: 'ServicesSection',
  components: { Editable },
  mixins: [PageDataMixin],

  computed: {
    items() {
      return this.resolveData('site.pages.main.sections.serv.items')
    }
  }
}
</script>

<style lang="sass">
  @import "@/assets/css/vars"
  .service-section
    padding: 30px 0
    background-image: url("@/assets/imgs/bg-map.png")
    background-position: center center
    background-size: cover
    .service-section-items-wrapper
      display: flex
      justify-content: space-around
      align-items: self-end
      flex-wrap: wrap
    .service-section-item
      max-width: 270px
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .service-section_link
        display: inline-block
        padding: 20px
        background-color: $accent-text
        &:hover
          color: black

</style>
