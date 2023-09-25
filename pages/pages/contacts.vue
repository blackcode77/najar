<template>
  <div>
    <MainSection>
      <div class="page-header">
        Contacts
      </div>
    </MainSection>

    <div class="service-section contacts-section" style="min-height: 400px;">
      <div class="container page-container">

        <div class="contacts-section_container">
          <div class="contacts-section_container-left">
            <div class="contact-item mb-20">
              <div class="contact-item_left">
                <div class="contact-item_icon">
                  <i class="el-icon-location-information"></i>
                </div>
              </div>
              <div class="contact-item_right">
                <div class="contact-item_header bold fz-20 mb-10">
                  Find us
                </div>
                <div class="contact-item_descr">
                  <p style="max-width: 290px;">{{ resolveData('site.footer.location') }}</p>
                </div>
              </div>
            </div>

            <div class="contact-item mb-20">
              <div class="contact-item_left">
                <div class="contact-item_icon">
                  <i class="el-icon-phone"></i>
                </div>
              </div>
              <div class="contact-item_right">
                <div class="contact-item_header bold fz-20 mb-10">
                  Call us
                </div>
                <div class="contact-item_descr">
                  <p>{{ resolveData('site.footer.phone') }}</p>
                </div>
              </div>
            </div>

            <div class="contact-item mb-20">
              <div class="contact-item_left">
                <div class="contact-item_icon">
                  <i class="el-icon-message"></i>
                </div>
              </div>
              <div class="contact-item_right">
                <div class="contact-item_header bold fz-20 mb-10">
                  Email us
                </div>
                <div class="contact-item_descr">
                  <p>{{ resolveData('site.footer.email') }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contacts-section_container-right w-100">
            <ContactsForm />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SiteMixin from '~/mixins/page-data-mixin'
import MainSection from "@/components/MainSection";
import ContactsForm from '@/components/ContactsForm'

export default {
  name: 'ContactsPage',
  mixins: [SiteMixin],
  components: {ContactsForm, MainSection},
  data() {
    return {
    }
  },

  methods: {
  },

  computed: {
    path() {
      return 'site.pages.contacts'
    }
  }
}
</script>

<style lang="sass">
.contacts-section
  .page-container
    max-width: 900px

.contacts-section_container
  display: flex
  flex-direction: row
.contacts-section_container-left
  padding-right: 30px
.sm, .xs
  .contacts-section_container
    flex-direction: column
    .contacts-section_container-left
      padding-right: unset
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: flex-start
      margin-bottom: 30px
      .contact-item
        margin-right: 20px
  .contacts-section
    .page-container
      max-width: 80%

.contact-item
  display: flex
  flex-direction: row

  .contact-item_left
    padding-right: 25px

  .contact-item_icon
    display: flex
    align-items: center
    justify-content: center
    width: 50px
    height: 50px
    background-color: rgb(255, 140, 0)
    border-radius: 5px

    i
      color: white
      font-size: 24px
</style>
