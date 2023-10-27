function swap(arr, i, j) {
  let tamp = arr[i];
  arr[i] = arr[j];
  arr[j] = tamp;
}

function reverseArr(arr) {
  let i = 0;
  let j = arr.length-1;
  while (i <= j) {
    swap(arr, i, j);
    i++;
    j--;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = reverseArr(arr);
console.log(result);
