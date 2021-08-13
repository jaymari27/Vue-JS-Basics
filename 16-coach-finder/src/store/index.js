// This is where we set up the stores

//// Packages
import { createStore } from 'vuex';

//// Modules
// This index.js file will call all stores, i.e. modules and requests
import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule
  }
});

export default store;
