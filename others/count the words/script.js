//Count the words in string without inbuild method. Consider single character also a word.
// " my channel     name  is  code   and tech ";

function countWords(str) {
  let realwordstring = "";
  let wordCount = 0;
  const stringLength = [...str].length;
  for (let i = 0; i < stringLength; i++) {
    if (i === 0 && str[i] === " ") {
      continue;
    }
    if (str[i] !== " ") {
      realwordstring += str[i];
    }
    if ((str[i] === " " || i === stringLength - 1) && realwordstring !== "") {
      wordCount += 1;
      realwordstring = "";
    }
  }
  return wordCount;
}

const result = countWords(" my channel name  is a code   and tech. ");
console.log(`result: ${result}`);

///////
///////
///////
///////
///////
///////

//Second method when use inbuild method.
function wordCount(str) {
  const WordCountinStr = str.trim().replace(/[\s]+/g, " ").split(" ").length;
  return WordCountinStr;
}

const resultData = wordCount(" my channel name  is a code   and tech. ");
console.log(`result: ${resultData}`);

//// Time Complexity O(n);
