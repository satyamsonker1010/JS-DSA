function lastIndex(arr, target) {
  let lo = 0;
  let hi = arr.length;
  let index = -1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] > target) {
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      index = mid;
      lo = mid + 1;
    }
  }
  return index;
}

function firstIndex(arr, target) {
  let lo = 0;
  let hi = arr.length;
  let firstIndex = -1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] > target) {
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      firstIndex = mid;
      hi = mid - 1;
    }
  }
  return firstIndex;
}

const arr = [10, 10, 10, 20, 20, 20, 20, 20, 30, 30, 40, 50];
const result = lastIndex(arr, 15);
const fIndex = firstIndex(arr, 25);

console.log("Last index => ", result, "First Index =>", fIndex);
