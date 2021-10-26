import Vue from "vue";
import Vuex from "vuex";
import bubbleSort from "./modules/bubbleSort";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bubbleSort,
  },
});
