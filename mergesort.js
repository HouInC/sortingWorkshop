function split(arr) {
  let mid = Math.ceil(arr.length / 2);
  let arr1 = arr.slice(0, mid);
  let arr2 = arr.slice(mid);

  return [arr1, arr2];
}

function merge (arr1, arr2) {
  let newArr = [];

  while (arr1.length && arr2.length){
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  if (arr1.length){
    newArr = newArr.concat(arr1);
  } else {
    newArr = newArr.concat(arr2);
  }
  return newArr;
}

function mergeSort(arr) {

  // Base Case
  if (arr.length <= 1) {
    return arr;
  }
  var result = [];
  var splitElem = split(arr);
  let left = mergeSort(splitElem[0]);
  let right = mergeSort(splitElem[1]);
  result = merge(left, right);

  return result;
}
