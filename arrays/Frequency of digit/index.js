function frqDigit(num, target) {
  let count = 0;
  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    if (digit === target) {
      count++;
    }
  }
  return count;
}

const output = frqDigit(145248999998, 9);
console.log(output);
