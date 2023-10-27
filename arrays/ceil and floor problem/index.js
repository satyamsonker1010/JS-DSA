function ceilAndFloor(arr, target) {
  let lo = 0;
  let hi = arr.length;
  let ceil = +Infinity;
  let floor = -Infinity;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] > target) {
      hi = mid - 1;
      ceil = arr[mid];
    } else if (arr[mid] < target) {
      lo = mid + 1;
      floor = arr[mid];
    } else {
      ceil = arr[mid];
      floor = arr[mid];
      break;
    }
  }
  console.log({ ceil: ceil, floor: floor });
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
ceilAndFloor(arr, 100);
