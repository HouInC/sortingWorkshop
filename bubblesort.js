function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

var swap = function (arr, j1, j2) {
  let temp = arr[j1];
  arr[j1] = arr[j2];
  arr[j2] = temp;
};
