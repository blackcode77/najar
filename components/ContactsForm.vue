<template>
  <div>
    <template v-if="scenario === 'phone'">
      <el-form
        v-loading="isSendingProcess"
        :model="contactForm"
        ref="contactForm"

        label-width="120px"
        label-position="top"
        class="demo-dynamic phone-scenario"
      >
        <el-form-item
          prop="phone"
          label=""
          :rules="[
        { min: 3, max: 30, message: 'Length should be 3 to 30', trigger: 'blur' }
      ]"
        >
          <el-input placeholder="Phone" v-model="contactForm.phone"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="text-uppercase mt-30 bold"
            :disabled="!sendMessageEnabled"
            type="primary"
            @click="submitForm('phone')"
          >
            <i class="el-icon-phone-outline" /> CALL BACK
          </el-button>
        </el-form-item>
      </el-form>
    </template>

    <template v-else>
      <el-form
        v-loading="isSendingProcess"
        :model="contactForm"
        ref="contactForm"

        label-width="120px"
        label-position="top"
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
            class="text-uppercase mt-30"
            :disabled="!sendMessageEnabled"
            type="primary"
            @click="submitForm()"
          >
            Send Now
          </el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>

<script>

export default {
  name: 'ContactsForm',

  components: {},
  emits: [''],

  props: {
    scenario: {
      default: 'email',
      type: String
    }
  },

  data() {
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

  computed: {
    sendMessageEnabled() {
      if (this.scenario === 'email') {
        return this.contactForm?.name?.length && this.contactForm?.email?.length && this.contactForm?.message?.length
      } else {
        return true
      }
    }
  },

  mounted() {
  },

  methods: {
    send() {
      const subject = this.scenario === 'phone' ? 'Call back' : 'Request from contacts form'

      const message = this.scenario === 'phone' ?
        `Phone: ${this.contactForm.phone}` :
        `\n
          Email: ${this.contactForm.email} \n
          Phone: ${this.contactForm.phone} \n
          Name: ${this.contactForm.name} \n\n
          Message: ${this.contactForm.message}
          `
      return this.$mail.send({
        from: 'eastarodubtsev@ya.ru',
        subject,
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
    },

    submitForm() {
      if (this.scenario === 'phone') {
        this.send()
        return
      }

      this.$refs.contactForm.validate((valid) => {
        if (valid) {
          this.isSendingProcess = true

          this.send()
        } else {
          return false;
        }
      })
    }
  }
}
</script>

<style lang="sass">
  .phone-scenario
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    input
      border-radius: unset
    .el-button
      margin-top: unset
      border-radius: unset
  .el-form--label-top
    .el-form-item__label
      padding: unset
  .el-form-item
    margin-bottom: unset
</style>
