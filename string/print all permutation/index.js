function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function permutation(str) {
  const perLength = factorial(str.length);
  const output = new Set();
  for (let i = 0; i < perLength; i++) {
    let result = "";
    let strArr = [...str];
    let tamp = i;
    for (let j = str.length; j > 0; j--) {
      const rem = tamp % j;
      result += strArr[rem];
      strArr.splice(rem, 1);
      tamp = Math.floor(tamp / j);
    }
    output.add(result);
  }
  return output;
}

const string = "abc";
const output = permutation(string);
console.log(output);
