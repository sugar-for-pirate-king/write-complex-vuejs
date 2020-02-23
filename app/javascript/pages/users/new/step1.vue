<template>
  <div class="p-4">
    <registration-header></registration-header>

    <div class="my-4">
      <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label">Nama anda</label>
        <div class="col-md-8">
          <input v-model="name" id="name" type="text" class="form-control" placeholder="Masukan nama anda">
        </div>
      </div>

      <div class="form-group row">
        <label for="email" class="col-md-4 col-form-label">Email anda</label>
        <div class="col-md-8">
          <input v-model="email" id="email" type="text" class="form-control" placeholder="Masukan email anda">
        </div>
      </div>
    </div>

    <div class="row my-4">
      <div class="col-md-4 ml-auto">
        <button class="btn btn-primary btn-block" @click="goToStep2()">Lanjutkan</button>
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationHeader from '../../../components/users/registration_header.vue'

export default {
  name: 'UsersNewStep1',
  data(){
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    goToStep2(){
      this.$store.commit('setName', this.name)
      this.$store.commit('setEmail', this.email)
      Turbolinks.visit('/web/users/new_step2')
    }
  },
  mounted(){
    this.name = this.$store.state.name
    this.email = this.$store.state.email
  },
  components: { RegistrationHeader } 
}
</script>