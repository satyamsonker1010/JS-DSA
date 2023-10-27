function sumOfArray(arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;
  let arr = [];
  while (i >= 0 || j >= 0 || carry) {
    let ele1 = arr1[i] === undefined ? 0 : arr1[i];
    let ele2 = arr2[j] === undefined ? 0 : arr2[j];
    let sum = ele1 + ele2 + carry;
    carry = Math.floor(sum / 10);
    let rem = sum % 10;
    arr.unshift(rem);
    i--;
    j--;
  }
  return arr;
}

function arrayPrintInNum(arr) {
  let pow = 1;
  let wholeNum = 0;
  let i = arr.length - 1;
  while (i >= 0) {
    wholeNum += arr[i] * pow;
    pow = pow * 10;
    i--;
  }
  return wholeNum;
}

const arr1 = [9, 9, 9,5];
const arr2 = [1, 1, 1];
const result = sumOfArray(arr1, arr2);
console.log(result);
const wholeNumber = arrayPrintInNum(result);
console.log("Whole number", wholeNumber);
