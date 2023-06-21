<template>
  <section class="numbers-section">
    <div class="numbers-section_inner container white">
      <div class="numbers-section_inner-item">
        <span class="fz-50">
          <i class="el-icon-box"></i>
        </span>
        <span class="bold fz-30">145K</span>
        <span>Worldwide Clients</span>
      </div>

      <div class="numbers-section_inner-item">
        <span class="fz-50">
          <i class="el-icon-share"></i>
        </span>
        <span class="bold fz-30">145K</span>
        <span>Worldwide Branches</span>
      </div>

      <div class="numbers-section_inner-item">
        <span class="fz-50">
          <i class="el-icon-user"></i>
        </span>
        <span class="bold fz-30">21</span>
        <span>Expert Company Staffs</span>
      </div>

      <div class="numbers-section_inner-item">
        <span class="fz-50">
          <i class="el-icon-service"></i>
        </span>
        <span class="bold fz-30">24/7</span>
        <span>Clients support</span>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'NumbersSection',
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
