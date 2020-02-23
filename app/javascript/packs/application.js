// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'bootstrap'
import './src/application.scss'

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import UsersNewStep1 from '../pages/users/new/step1.vue'
import UsersNewStep2 from '../pages/users/new/step2.vue'
import UsersNewStep3 from '../pages/users/new/step3.vue'
import Vuex from 'vuex'

Vue.use(TurbolinksAdapter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: '',
    email: '',
    organizationName: '',
    organizationEmail: ''
  },
  mutations: {
    setName (state, name) {
      state.name = name
    },
    setEmail(state, email) {
      state.email = email
    },
    setOrganizationName(state, organizationName) {
      state.organizationName = organizationName
    },
    setOrganizationEmail(state, organizationEmail) {
      state.organizationEmail = organizationEmail
    },
  }
})

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#app',
    store,
    components: { App, UsersNewStep1, UsersNewStep2, UsersNewStep3 }
  })
})
