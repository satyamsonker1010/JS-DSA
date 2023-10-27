const arr = ["a", "b", "c", "d"];

function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let str = "";
      for (let k = i; k <= j; k++) {
        str += arr[k] + " ";
      }
      console.log(str);
    }
  }
}

const result = subArray(arr);
console.log(result);
