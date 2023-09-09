/**
 * Change string into lowercase and also remove the all
 * special character except alphabates and number.
 *
 * example:
 * Code & Tech Top 1 Channel => codetechtop1channel
 */
//First Method
function changeIntoLower(str) {
  const replaceCharacter = str.replace(/[^a-zA-Z0-9]/gi, "");
  let outputString = "";

  for (let i = 0; i < replaceCharacter.length; i++) {
    const asciiValue = replaceCharacter.charCodeAt(i);
    if (asciiValue >= 65 && asciiValue <= 90) {
      outputString += String.fromCharCode(asciiValue + 32);
    } else {
      outputString += replaceCharacter[i];
    }
  }

  return outputString;
}

const outputString = changeIntoLower("Code & Tech Top 1 Channel");
console.log(outputString);




//Second Method using in build method
function changeIntoLowerSecondMethod(str) {
  const replaceCharacter = str.replace(/[^a-zA-Z0-9]/gi, "");
  return outputString.toLowerCase();
}

const secondMethodData = changeIntoLowerSecondMethod(
  "Code & Tech Top 1 Channel"
);
console.log(secondMethodData);
