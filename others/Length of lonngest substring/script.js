
const lengthOfLongestSubstring = function (s) {
    debugger
    /* creating an array of size 256 since the the input string consists of English letters, digits, symbols, spaces 
    and we need to store the index of each character in the lastIndex array at the index of the ascii code of the character. 
    lastIndex array would be used to find out the index of last occurrence for each character */
    const lastIndex = Array(256).fill(-1);
    let i = 0,
      result = 0;
  
    for (let j = 0; j < s.length; j++) {
      const asciiOfCurrentChar = s.charCodeAt(j);
      i = Math.max(i, lastIndex[asciiOfCurrentChar] + 1);
      result = Math.max(result, j - i + 1);
      lastIndex[asciiOfCurrentChar] = j;
    }
  
    return result;
  };

  const output = lengthOfLongestSubstring("abcabcbb")
  console.log(output);