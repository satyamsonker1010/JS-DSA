const arr1 = [5, 4, 4, 4];
const arr2 = [5, 1, 1, 1];

function substractArr(arr1, arr2) {
  let max = Math.max(arr1.length, arr2.length);
  const result = Array(max).fill(0);
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;
  let k = max - 1;
  while (k >= 0) {
    let firstEle = arr1[i] + carry;
    let secEle = arr2[j] ? arr2[j] : 0;
    let diff;
    if (firstEle >= secEle) {
      diff = firstEle - secEle;
      carry = 0;
    } else {
      diff = firstEle + 10 - secEle;
      carry = -1;
    }
    result[k] = diff;
    i--;
    j--;
    k--;
  }
  return result;
}

const output = substractArr(arr1, arr2);
console.log(output);
