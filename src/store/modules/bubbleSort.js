const state = () => {
  return {
    currentArray: [],
  };
};

const getters = {
  getCurrentArray(state) {
    return state.currentArray;
  },
};

const actions = {
  setCurrentArray({ commit }, array) {
    commit("setCurrentArray", array);
  },
};

const mutations = {
  setCurrentArray(state, array) {
    state.currentArray = array;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
