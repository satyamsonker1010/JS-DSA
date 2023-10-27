function swap(arr, i, j) {
  let tamp = arr[i];
  arr[i] = arr[j];
  arr[j] = tamp;
}

function reverse(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    swap(arr, i, j);
    i++;
    j--;
  }
  return arr;
}

function rotateArr(arr, k) {
  if (k === 0) return arr;
  if (k < 0) {
    let postive = (-1 * k) % arr.length;
    k = Math.abs(arr.length - postive) % arr.length;
  } else {
    k = k % arr.length;
  }
  let part1 = reverse(arr.slice(0, arr.length - k));
  let part2 = reverse(arr.slice(arr.length - k));
  let newArr = [...part1, ...part2];
  return reverse(newArr);
}

const arr = ["a", "b", "c", "d"];
const k = 5;
const result = rotateArr(arr, k);
console.log(result);
