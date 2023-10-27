/////We consider num1 is bigger;
function substract(num1, num2, base) {
  let carry = 0;
  let sum = 0;
  let pow = 1;
  while (num1 > 0) {
    let digit1 = num1 % 10;
    num1 = Math.floor(num1 / 10);
    let digit2 = num2 % 10;
    num2 = Math.floor(num2 / 10);
    let diff = 0;
    digit1 = digit1 + carry;
    //First add carry then start comparaison;
    if (digit1 >= digit2) {
      carry = 0;
      diff = digit1 - digit2;
    } else {
      carry = -1;
      diff = digit1 + base - digit2;
    }
    sum += diff * pow;
    pow = pow * 10;
  }
  return sum;
}

const output = substract(1212, 256, 8);
const output2 = substract(202, 21, 7);
console.log(output);
console.log(output2);
