import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        fname: 'asd',
        lname: 'asd',
        email: 'asd@asd.fi'
      },
      {
        fname: 'qwe',
        lname: 'qwe',
        email: 'qwe@qwe.fi'
      },
    ]
  },
  mutations: {
    add(state, payload) {
      state.list.push({
        fname: payload.fname,
        lname: payload.lname,
        email: payload.email
      })
    },
    remove(state, payload) {
      let index = state.list.indexOf(payload.item);
      if (index !== -1) state.list.splice(index, 1);
    }
  },
  actions: {
    // put asynchronous functions that can call one or more mutation functions
  }
})