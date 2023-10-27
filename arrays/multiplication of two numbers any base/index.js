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

function multiplicationBySingleDigit(n1, d1, base) {
  let carry = 0;
  let sum = 0;
  let pow = 1;
  while (n1 > 0 || carry) {
    let digit = n1 % 10;
    n1 = Math.floor(n1 / 10);
    let mul = digit * d1 + carry;
    carry = Math.floor(mul / base);
    let rem = mul % base;
    sum += rem * pow;
    pow = pow * 10;
  }
  return sum;
}

function realMul(n1, n2, base) {
  let realSum = 0;
  let pow = 1;
  while (n2 > 0) {
    let digit = n2 % 10;
    n2 = Math.floor(n2 / 10);
    let singleDigMul = multiplicationBySingleDigit(n1, digit, base);
    // Addition of any base;
    realSum = sumOfAnyBase(singleDigMul, realSum * pow, base);
    pow = pow * 10;
  }
  return realSum;
}

const output = realMul(567, 44, 8);
console.log(output);
