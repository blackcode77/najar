<template>
  <div>
    <section class="index-section-top mt-30">
      <div v-if="false" class="main-bg_outer">
        <div class="main-bg_image"></div>
      </div>

      <div class="main-info relative-flow">
       <div class="container white">
         <p class="main-info_p1 ext-uppercase mb-10">We are provide best services</p>

         <p class="main-info_p2 text-uppercase fz-30 bold mb-10">World wide</p>

         <p class="main-info_p3 text-uppercase fz-50 bold mb-10">Best shipping</p>

         <p class="main-info_p4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita maiores maxime officiis praesentium, quaerat quis quo quos reiciendis repellendus temporibus.</p>
       </div>
      </div>
    </section>

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
export default {
  name: 'IndexPage',
  components: {WhyWeSection, AboutSection, ServicesSection, NumbersSection}
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
    padding-top: 100px
    z-index: -100
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
