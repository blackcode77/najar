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
            <el-form
              v-loading="isSendingProcess"
              :model="contactForm"
              ref="contactForm"
              label-width="120px"
              class="demo-dynamic"
            >
              <el-form-item
                prop="name"
                label="Name"
                :rules="[
                        { required: true, message: 'Please input your name', trigger: 'blur' },
                        { min: 3, max: 100, message: 'Length should be 3 to 100', trigger: 'blur' }
                      ]"
              >
                <el-input v-model="contactForm.name"></el-input>
              </el-form-item>

              <el-form-item
                prop="email"
                label="Email"
                :rules="[
                        { required: true, message: 'Please input email address', trigger: 'blur' },
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                      ]"
              >
                <el-input v-model="contactForm.email"></el-input>
              </el-form-item>

              <el-form-item
                prop="phone"
                label="Phone"
                :rules="[
                        { min: 3, max: 30, message: 'Length should be 3 to 30', trigger: 'blur' }
                      ]"
              >
                <el-input v-model="contactForm.phone"></el-input>
              </el-form-item>

              <el-form-item
                label="Message"
                prop="message"
                :rules="[
                      { required: true, message: 'Please input message', trigger: 'blur' },
                        { min: 3, max: 500, message: 'Length should be 3 to 500', trigger: 'blur' }
                      ]"
              >
                <el-input type="textarea" v-model="contactForm.message"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button
                  class="text-uppercase"
                  :disabled="!sendMessageEnabled"
                  type="primary"
                  @click="submitForm()"
                >
                  Send Now
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SiteMixin from '~/mixins/page-data-mixin'
import MainSection from "@/components/MainSection";

export default {
  name: 'ContactsPage',
  mixins: [SiteMixin],
  components: { MainSection },
  data () {
    return {
      isSendingProcess: false,
      contactForm: {
        name: null,
        email: null,
        phone: null,
        message: null
      }
    }
  },

  methods: {
    submitForm() {
      this.$refs.contactForm.validate((valid) => {
        if (valid) {
          this.isSendingProcess = true
          const message = `\n
          Email: ${this.contactForm.email} \n
          Phone: ${this.contactForm.phone} \n
          Name: ${this.contactForm.name} \n\n
          Message: ${this.contactForm.message}
          `
          this.$mail.send({
            from: 'eastarodubtsev@ya.ru',
            subject: 'Request from contacts form',
            text: message
          }).then((data) => {
            this.$refs.contactForm.resetFields();
            this.$notify({
              position: 'bottom-right',
              title: 'Success',
              message: 'Message sent',
              type: 'success'
            });
          }).finally(() => {
            this.isSendingProcess = false
          })
        } else {
          return false;
        }
      })
    }
  },

  computed: {
    sendMessageEnabled() {
      return this.contactForm?.name?.length && this.contactForm?.email?.length && this.contactForm?.message?.length
    },
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
