// Add two binary numbers

let a = "101";
let b = "111"; 
function addBinNumber(a, b) {
  let maxLen = Math.max(a.length, b.length);
  let padAddA = a.padStart(maxLen, "0");
  let padAddb = b.padStart(maxLen, "0");
  let str = "";
  let carr = 0;
  for (let i = maxLen - 1; i >= 0; i--) {
    let firstBit = parseInt(padAddA[i], 2);
    let secondBit = parseInt(padAddb[i], 2);
    let sum = firstBit + secondBit + carr;
    carr = Math.floor(sum / 2);
    str = Math.floor(sum % 2) + str;
  }
  if (carr > 0) {
    str = carr + str;
  }
  console.log(str);
}

addBinNumber(a, b);
