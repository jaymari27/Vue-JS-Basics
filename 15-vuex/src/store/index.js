import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

// createStore takes an object
const store = createStore({
  /// Merging all modules into one store:
  // counterModule contains all the other modules
  // numbers can be named anything. It is called a namespace. "numbers" is the namespace we gave to counterModule
  modules: {
    numbers: counterModule
  },
  // state() returns state object, like data()
  // This acts as a global data. You dont need to inject or prop. Then you can refer to below object as "$store.state.isLoggedIn"
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;
