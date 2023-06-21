<template>
  <section class="about-section pt-50 mb-20" style="background-color: #f7f7f7;">
    <div class="container mb-20">
      <div class="about-section_inner text-center mb-30">
        <p class="text-uppercase accent-text text-center mb-10">WHY CHOOSE US</p>

        <h3 class="about-section_title fz-30 text-uppercase bold text-center mb-10">THE MAIN FEATURES</h3>

        <span class="about-section_delimiter"></span>
      </div>

      <p class="text-center text-lighter mb-30" style="max-width: 500px; margin: 0 auto;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, error.</p>

      <div class="about-section_info container">
        <div class="about-section_info-block">
          <ul class="why-points">
            <li class="why-point">
              <div class="why-point_left">
                <h4 class="mb-10 fz-20">Quality service affordable price</h4>

                <p class="lh-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos necessitatibus perspiciatis soluta.</p>
              </div>
              <div class="why-point_right accent-text">
                <i class="el-icon-check"></i>
              </div>
            </li>

            <li class="why-point">
              <div class="why-point_left">
                <h4 class="mb-10 fz-20">Quality service affordable price</h4>

                <p class="lh-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos necessitatibus perspiciatis soluta.</p>
              </div>
              <div class="why-point_right accent-text">
                <i class="el-icon-check"></i>
              </div>
            </li>

            <li class="why-point">
              <div class="why-point_left">
                <h4 class="mb-10 fz-20">Quality service affordable price</h4>

                <p class="lh-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos necessitatibus perspiciatis soluta.</p>
              </div>
              <div class="why-point_right accent-text">
                <i class="el-icon-check"></i>
              </div>
            </li>

            <li class="why-point">
              <div class="why-point_left">
                <h4 class="mb-10 fz-20">Quality service affordable price</h4>

                <p class="lh-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos necessitatibus perspiciatis soluta.</p>
              </div>
              <div class="why-point_right accent-text">
                <i class="el-icon-check"></i>
              </div>
            </li>
          </ul>
        </div>

        <div class="about-section_info-block about-section_info-block-icon text-center">
          <div class="about-section_info-block-icon-cnt">
            <NajarLogo width="200" height="200" class="mr-10" />
          </div>
        </div>
      </div>
    </div>


  </section>
</template>


<script>
export default {
  name: 'WhyWeSection',
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
