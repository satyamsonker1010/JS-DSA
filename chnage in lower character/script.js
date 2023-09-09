//// Chnage into lower case
function chnageIntoLower(str) {
  let outputStr = "";

  for (let i = 0; i < str.length; i++) {
    const asciiValue = str.charCodeAt(i);
    if (asciiValue >= 65 && asciiValue <= 90) {
      outputStr += String.fromCharCode(asciiValue + 32);
    } else {
      outputStr += str[i];
    }
  }

  return outputStr;
}

const strData = chnageIntoLower("Satyam Code & Tech. Top 1 channel for js");
console.log(strData);
