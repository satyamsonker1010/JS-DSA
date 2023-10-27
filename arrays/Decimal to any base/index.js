function decimalToAny(num, base) {
  let sum = 0;
  let pow = 1;
  while (num > 0) {
    baseDigit = num % base;
    num = Math.floor(num / base);
    sum += baseDigit * pow;
    pow = pow * 10;
  }
  return sum;
}

const output = decimalToAny(634, 8);
console.log(output);
