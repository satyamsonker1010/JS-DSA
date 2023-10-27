function inverse(arr) {
  const newArr = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    newArr[val] = i;
  }

  return newArr;
}
const arr = [4, 1, 0, 2, 3];
const result = inverse(arr);
console.log(result);
