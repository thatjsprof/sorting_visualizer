const state = () => {
  return {
    currentArray: [],
    currentSwappers: [],
    currentBubble: [],
    running: false,
  };
};

const getters = {
  getCurrentArray(state) {
    return state.currentArray;
  },
  getCurrentSwappers(state) {
    return state.currentSwappers;
  },
  getCurrentBubble(state) {
    return state.currentBubble;
  },
  getRunning(state) {
    return state.running;
  },
};

const actions = {
  setCurrentArray({ commit }, array) {
    commit("setCurrentArray", array);
  },
  setRunning({ commit }, value) {
    commit("setRunning", value);
  },
  setCurrentSwappers({ commit }, array) {
    commit("setCurrentSwappers", array);
  },
  setCurrentBubble({ commit }, array) {
    commit("setCurrentBubble", array);
  },
};

const mutations = {
  setCurrentArray(state, array) {
    state.currentArray = array;
  },
  setRunning(state, value) {
    state.running = value;
  },
  setCurrentSwappers(state, array) {
    state.currentSwappers = array;
  },
  setCurrentBubble(state, array) {
    state.currentBubble = array;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
