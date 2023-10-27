// Write a program to adding binary numbers
const a = "101";
const b = "100";

function sumCount(bin1, bin2) {
  const maxLen = Math.max(bin1.length, bin2.length);
  const addPadbin1 = bin1.padStart(maxLen, 0);
  const addPadbin2 = bin2.padStart(maxLen, 0);
  let carry = 0;
  let result = "";
  for (let i = maxLen- 1; i >= 0; i--) {
    const bit1 = parseInt(addPadbin1[i], 2);//change into binary
    const bit2 = parseInt(addPadbin2[i], 2);//change into binary
    let sum = bit1 + bit2 + carry;
    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;
  }
  if (carry > 0) {
    result = carry.toString() + result;
  }
  return result;
}

const countData = sumCount(a, b);
console.log(countData);
