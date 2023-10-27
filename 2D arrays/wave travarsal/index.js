/**
1  2  3  4 
5  6  7  8 
9  10 11 12
13 14 15 16  
 
 */

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
function waveTeavese(arr) {
  for (let col = 0; col < arr.length; col++) {
    let str = "";
    for (row = 0; row < arr.length; row++) {
      if (col % 2 === 0) {
        str = str + arr[row][col] + " ";
      } else {
        str = arr[row][col] + " " + str;
      }
    }
    console.log(str);
  }
}

const result = waveTeavese(arr);
