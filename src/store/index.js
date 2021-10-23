import { createStore } from "vuex";
import bubbleSort from "./modules/bubbleSort";

export default createStore({
  modules: {
    bubbleSort,
  },
});
