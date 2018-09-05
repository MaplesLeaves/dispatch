import Vue from 'vue'
import Vuex from 'vuex'
import state from './store.js'
import getters from './getters.js'
import mutations from './mutation.js'
// import * as mutationtypes from './mutation-types';

Vue.use(Vuex)
 const store =  new Vuex.Store({
   state,
   getters,
   mutations
})
export default store