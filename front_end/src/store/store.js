import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)
Vue.use(VueCookies)
Vue.$cookies.config('7d')

var state = Vue.$cookies.get('state') || {
  tickets: [
    { id: 1, name: null, userId: null }
  ],
  users: [
    { id: 1, account: 'ToanDK2' },
    { id: 2, account: 'KienTT5' },
    { id: 3, account: 'ThangTD11' },
    { id: 4, account: 'LinhDH6' },
    { id: 5, account: 'DinhLT2' }
  ]
}

export default new Vuex.Store({
  state: state,
  mutations,
  actions,
  getters
})
