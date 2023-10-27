function subSet(str) {
  const pow = Math.pow(2, str.length);
  console.log(pow);
  for (let i = 0; i < pow; i++) {
    let pos = i;
    let result = "";
    for (let j = str.length - 1; j >= 0; j--) {
      let bit = pos & 1;
      if (bit === 1) {
        result = str[j] + result;
      } else {
        result = "-" + result;
      }
      pos = pos >> 1;
    }
    console.log(result);
  }
}

const string = "abcdefghij";
subSet(string);
