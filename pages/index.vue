<template>
  <div>
    <MainSection />

    <ServicesSection />

    <AboutSection />

    <WhyWeSection />

    <NumbersSection />
  </div>
</template>

<script>
import NumbersSection from "@/components/NumbersSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyWeSection from "@/components/WhyWeSection";
import SiteMixin from '~/mixins/page-data-mixin'
import MainSection from "@/components/MainSection";


export default {
  name: 'IndexPage',
  mixins: [SiteMixin],
  components: {MainSection, WhyWeSection, AboutSection, ServicesSection, NumbersSection}
}
</script>

<style lang="sass">
  .service-items_outer
    display: flex
    align-items: center
    height: 250px
  .service-items_inner
    margin: 0 auto
    max-width: 662px
    text-transform: uppercase
    text-align: center
    font-size: 30px
    font-weight: lighter
    font-family: "Roboto-Light", serif
    span
      display: inline-flex
      justify-content: center
      align-items: center
      line-height: 50px
      &:after
        content: ""
        display: inline-block
        width: 5px
        height: 5px
        border-radius: 5px
        background-color: #fff
        margin-left: 20px
        margin-right: 20px
</style>
