// Question find the first repeacting character in strong or word.

function checkRepeactingCharacter(str) {
  const removeSpaces = [...str.replace(/[\s]+/g, "")];
  const mapData = new Map();
  let repeactCharacter = null;

  for (let i = 0; i < removeSpaces.length; i++) {
    if (mapData.has(removeSpaces[i])) {
      repeactCharacter = removeSpaces[i];
      break;
    } else {
      mapData.set(removeSpaces[i], 1);
    }
  }
  return repeactCharacter;
}

const runFunction = checkRepeactingCharacter("Hello my name is satyam");

console.log(runFunction);