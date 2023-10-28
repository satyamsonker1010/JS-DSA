function pallindrom(str) {
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function subString(str) {
  let result = new Set();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let sub = str.substring(i, j);
      if (pallindrom(sub)) {
        result.add(sub);
      }
    }
  }
  console.log(result);
}

const string = "abba";
subString(string);
