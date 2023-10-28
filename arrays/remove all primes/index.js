function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function removePrime(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (checkPrime(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const result = removePrime(array);
console.log(result);
