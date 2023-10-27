const arr = [1, 5, 3, 2, 4];
// its not working
function barChart(arr) {
  let str = "";
  let max = Math.max(...arr);

  for (let floor = max; floor >= 1; floor--) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= floor) {
        console.log("*\t");
      } else {
        console.log("\t");
      }
    }
    console.log("\n");
  }
}

const output = barChart(arr);
console.log(output);
