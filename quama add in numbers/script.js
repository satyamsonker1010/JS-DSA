const data = 1234.123;

const outputQuama = (data) => {
    debugger
  const [integer, float] = String(data).split(".");
  const floatString = float ? `.${float}` : "";

  let j = 0,
    result="",
    currentChracter;
  for (i = integer.length - 1; i >= 0; i--) {
    currentChracter = integer[i];
    if (j === 3 && typeof Number(currentChracter) === "number") {
      result = `${currentChracter},` + result;
      j = 1;
    } else {
      result = currentChracter + result;
      j++;
    }
  }
  return `${result}${floatString}`;
};

console.log(outputQuama(data))

// function addComma(num) {
//   const [integer, float] = String(num).split(".");
//   const fraction = float ? `.${float}` : "";
//   let result = "",
//     j = 0,
//     currentChar;

//   for (let i = integer.length - 1; i >= 0; i--) {
//     currentChar = integer[i];
//     if (j=== 3 && typeof Number(currentChar) === "number") {
//       j = 1;
//       result = `${currentChar},` + result;
//     } else {
//       result = currentChar + result;
//       j++;
//     }
//   }

//   return `${result}${fraction}`;
// }

// console.log(addComma(data));
