<template>
  <div class="p-4">
    <registration-header></registration-header>

    <div class="row">
      <div class="col-md-6">
        <span class="font-weight-bold d-block mb-2">Pengguna</span>
        <span class="d-block mb-1">{{ name }}</span>
        <span class="d-block">{{ email }}</span>
      </div>

      <div class="col-md-6">
        <span class="font-weight-bold d-block mb-2">Organisasi</span>
        <span class="d-block mb-1">{{ organizationName }}</span>
        <span class="d-block">{{ organizationEmail }}</span>
      </div>
    </div>

    <hr> 

    <div class="form-group row mb-4">
      <label for="memo" class="col-form-label col-md-4">Memo</label>
      <div class="col-md-8">
        <textarea v-model="memo" class="form-control" cols="30" rows="10"></textarea>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 ml-auto">
        <button class="btn btn-secondary btn-block" @click="goToStep2()">Kembali</button>
      </div>
      <div class="col-md-4">
        <button class="btn btn-primary btn-block">Lanjutkan</button>
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationHeader from '../../../components/users/registration_header'

export default {
  name: 'UserNewStep3',
  data() {
    return {
      name: '',
      email: '',
      organizationName: '',
      organizationEmail: '',
      memo: ""
    }
  },
  methods: {
    goToStep2(){
      Turbolinks.visit("/web/users/new_step2")
    }
  },
  mounted(){
    this.name = this.$store.state.name
    this.email = this.$store.state.email
    this.organizationName = this.$store.state.organizationName
    this.organizationEmail = this.$store.state.organizationEmail
  },
  components: { RegistrationHeader }
}
</script>