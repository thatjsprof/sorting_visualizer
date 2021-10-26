const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (array, dispatch, speed) => {
  let sorted = false,
    round = 0,
    arr = array.slice(0),
    { length } = arr,
    toDispatch = [];

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < length - 1 - round; i++) {
      let j = i + 1;
      toDispatch.push([i, j]);
      if (arr[i] > arr[j]) {
        sorted = false;
        swap(arr, i, j);
        toDispatch.push([i, j, true]);
        toDispatch.push(arr.slice(0));
      }
    }

    round++;
  }

  handleDispatch(toDispatch, arr, dispatch, speed);
};

const handleDispatch = (toDispatch, arr, dispatch, speed) => {
  if (!toDispatch.length) {
    dispatch().setCurrentBubble([]);
    dispatch().setCurrentSwappers([]);
    dispatch().setRunning(false);

    return;
  }

  let dispatchFunction =
    toDispatch[0].length === 3
      ? dispatch().setCurrentSwappers
      : toDispatch[0].length > 3
      ? dispatch().setCurrentArray
      : dispatch().setCurrentBubble;

  toDispatch[0].length > 3 ? dispatch().setCurrentSwappers([]) : null;

  dispatchFunction(toDispatch.shift());

  setTimeout(() => {
    handleDispatch(toDispatch, arr, dispatch, speed);
  }, speed);
};

export default bubbleSort;
