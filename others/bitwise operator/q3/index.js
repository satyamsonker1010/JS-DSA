//// Add two decimal number without using sign operator;
//

//This method can  not handle the bigintegers numbers
let a = 9333852702227987;
let b = 85731737104263;

function adddNumbers(a, b) {
  let carry = 0;
  let str = "";
  while (a != 0 || b != 0) {
    let bitA = a & 1;
    let bitB = b & 1;
    let sum = bitA + bitB + carry;
    rimender = Math.floor(sum % 2);
    carry = Math.floor(sum / 2);
    str = rimender + str;
    a = a >> 1;
    b = b >> 1;
  }
  if (carry > 0) {
    str = carry + str;
  }
  console.log(parseInt(str, 2));
}

//adddNumbers(a, b);

/**Second Method */
function secondMethod(a, b) {
  if (a == 0 && b === 0) {
    return "0";
  }
  let carry = 0;
  let str = "";
  while (a !== 0 || b !== 0) {
    let firstCarry = 0;
    let secondcarry = 0;
    if (a !== 0) {
      firstCarry = Math.floor(a % 10);
      a = Math.floor(a / 10);
    }
    if (b !== 0) {
      secondcarry = Math.floor(b % 10);
      b = Math.floor(b / 10);
    }
    let sum = firstCarry + secondcarry + carry;
    carry = Math.floor(sum / 10);
    str = Math.floor(sum % 10) + str;
  }
  if (carry > 0) {
    str = carry + str;
  }
  console.log(str);
}

secondMethod(a, b);
