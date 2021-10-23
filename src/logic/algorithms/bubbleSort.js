// import store from "vuex";

// const dispatch = (array) => store.mapActions('setCurrentArray', array)

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let k = j + 1;
      if (arr[j] > arr[k]) {
        swap(arr, j, k);
      }
    }
  }

  return arr;
};

// const handleDispatch = (toDispatch, dispatch, array, speed) => {}

export default bubbleSort;
