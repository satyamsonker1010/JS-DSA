function sumOfAnyBase(num1, num2, base) {
  let sum = 0;
  let carry = 0;
  let pow = 1;
  while (num1 > 0 || num2 > 0 || carry > 0) {
    let dig1 = num1 % 10;
    let dig2 = num2 % 10;
    let digSum = dig1 + dig2 + carry;
    let remender = digSum % base;
    carry = Math.floor(digSum / base);
    sum += remender * pow;
    pow = pow * 10;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }
  return sum;
}

const output = sumOfAnyBase(236, 754, 8);
const output2 = sumOfAnyBase(111, 111, 2);
console.log(output);
console.log(output2);
