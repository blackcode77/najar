<template>
  <section class="service-section">
    <div class="container">
      <div class="about-section_inner text-center mb-30">
        <h3 class="about-section_title fz-30 text-uppercase bold text-center mb-10">We provide services</h3>

        <span class="about-section_delimiter"></span>
      </div>

      <div class="service-section-items-wrapper">
        <div class="service-section-item">
          <span class="fz-50 mb-10">
            <i class="el-icon-box"></i>
          </span>

          <h3 class="mb-20">Sea Fright</h3>

          <p class="text-center mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

          <a class="service-section_link white" href="">READ MORE</a>
        </div>

        <div class="service-section-item">
          <span class="fz-50 mb-10">
            <i class="el-icon-box"></i>
          </span>

          <h3 class="mb-20">Sea Fright</h3>

          <p class="text-center mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

          <a class="service-section_link white" href="">READ MORE</a>
        </div>

        <div class="service-section-item">
          <span class="fz-50 mb-10">
            <i class="el-icon-box"></i>
          </span>

          <h3 class="mb-20">Sea Fright</h3>

          <p class="text-center mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

          <a class="service-section_link white" href="">READ MORE</a>
        </div>

        <div class="service-section-item">
          <span class="fz-50 mb-10">
            <i class="el-icon-box"></i>
          </span>

          <h3 class="mb-20">Sea Fright</h3>

          <p class="text-center mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

          <a class="service-section_link white" href="">READ MORE</a>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'ServicesSection',
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
