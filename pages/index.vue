<template>
  <div class="mt-30">
    <NajarLogo />
    <section class="section-top white">
      <p>Shipping</p>

      <p>Freight forwarding service</p>

      <p>Project logistic</p>

      <p>Agency service</p>

      <p>customs brokerage</p>
    </section>
  </div>
</template>

<script>
import NajarLogo from "~/components/NajarLogo";
export default {
  name: 'IndexPage',
  components: {NajarLogo},
}
</script>

<style lang="sass">
  .section-top
    text-transform: uppercase
    font-size: 30px
    font-weight: lighter
    font-family: "Roboto-Light"
    text-align: center
    p
      display: inline-flex
      justify-content: center
      align-items: center
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
