import Vue from 'vue'
import Vuex from 'vuex'

import common from './common.js'
import notes from './notes.js'
import menu from './menu.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    notes,
    menu
  }
})
