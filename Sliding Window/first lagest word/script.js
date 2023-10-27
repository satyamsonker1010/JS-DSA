//Find largest word;
//example => Hi my name is satyam
//output = satyam

function maxWord(str) {
  let maxlength = 0;
  let word = "";
  let start = 0;
  let next = 0;

  while (next <= str.length) {
    if (str[next] === " " || next === str.length) {
      maxlength = Math.max(maxlength, next - start);
      next++;
      start = next;
      word = "";
    } else {
      word += str[next];
      next++;
    }
  }
  return maxlength;
}

const output = maxWord("India is a develop country");
console.log(output);
