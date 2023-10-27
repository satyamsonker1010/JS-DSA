//Add Comma After Thousand Count
//ex => 1,000 or 1,254,632 , 14,587.25547

function addComma(x) {
  const [integer, float] = x.toString().includes(".")
    ? x.toString().split(".")
    : [x, null];
  let numString = [...new String(integer)];
  let outputData = "";
  let counting = 0;
  for (let i = numString.length - 1; i >= 0; i--) {
    if (counting === 3) {
      outputData = numString[i] + "," + outputData;
      counting = 1;
      continue;
    } else {
      outputData = numString[i] + outputData;
    }
    counting++;
  }
  let newOutPut = outputData + (float ? "." + float : "");
  return newOutPut;
}

const output = addComma(1452316987.123456);
console.log(output);
///////////////
///////////////
///////////////
///Second Method

function addCommaSecondMethod(num) {
  const [integer, float] = String(num).split(".");
  const fraction = float ? `.${float}` : "";
  return Number(integer).toLocaleString() + fraction;
}
const quommaAdd = addCommaSecondMethod(145236987.12443885);
console.log(quommaAdd);
