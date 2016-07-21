import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  // STATES
  state: {
    name: '',
    user: {
      name: '',
      profile: {},
      org: {},
      repo: {}
    }
  },

  // MUTATIONS
  mutations: {
    SET_USER: (state, username) => {
      state.name = username
    },

    GET_USER: (state, username) => {
      this.$http.get('https://api.github.com/users/' + username).then((response) => {
        state.user.$set('profile', 'jeff')
        state.user.$set('profile', response.json())
      }, (response) => {
        console.log('error')
      })
    },

    GET_REPO: (state, username) => {
      console.log('error')
    },
    GET_ORG: (state, username) => {
      console.log('error')
    }
  }

})
