<template>
  <div class="p-4">
    <registration-header></registration-header>

    <div class="row my-4">
      <div class="col-md-4">
        <span>Nama anda</span>
      </div>
      <div class="col-md-8">
        <span>{{  this.name }}</span>
      </div>
    </div>

    <div class="row my-4">
      <div class="col-md-4">
        <span>Email anda</span>
      </div>
      <div class="col-md-8">
        <span>{{  this.email }}</span>
      </div>
    </div>

    <hr>

    <div class="form-group row">
      <label for="organization-name" class="col-md-4 col-form-label">Organization name</label>
      <div class="col-md-8">
        <input v-model="organizationName" id="organization-name" type="text" class="form-control" placeholder="Masukan nama organisasi">
      </div>
    </div>

    <div class="form-group row">
      <label for="organization-name" class="col-md-4 col-form-label">Organization email</label>
      <div class="col-md-8">
        <input v-model="organizationEmail" id="organization-name" type="text" class="form-control" placeholder="Masukan email organisasi">
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 ml-auto">
        <button class="btn btn-secondary btn-block" @click="goToStep1()">Kembali</button>
      </div>
      <div class="col-md-4">
        <button class="btn btn-primary btn-block" @click="goToStep3()">Lanjutkan</button>
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationHeader from '../../../components/users/registration_header'

export default {
  name: 'UsersNewStep2',
  data(){
    return {
      name: '',
      email: '',
      organizationName: '',
      organizationEmail: ''
    }
  },
  methods: {
    goToStep1(){
      const step1Path = '/web/users/new'
      Turbolinks.visit(step1Path)
    },
    goToStep3(){
      const step3Path = '/web/users/new_step3'
      this.$store.commit('setOrganizationName', this.organizationName)
      this.$store.commit('setOrganizationEmail', this.organizationEmail)
      Turbolinks.visit(step3Path)
    }
  },
  components: { RegistrationHeader },
  mounted(){
    this.name = this.$store.state.name
    this.email = this.$store.state.email
    this.organizationName = this.$store.state.organizationName
    this.organizationEmail = this.$store.state.organizationEmail
  }
}
</script>