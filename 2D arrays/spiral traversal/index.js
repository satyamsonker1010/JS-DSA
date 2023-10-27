const mat = [
  [11, 12, 13, 14, 15, 16, 17],
  [21, 22, 23, 24, 25, 26, 27],
  [31, 32, 33, 34, 35, 36, 37],
  [41, 42, 43, 44, 45, 46, 47],
  [51, 52, 53, 54, 55, 56, 57],
];

//[11,21,31,41,51,52,53,54,55,56,57,47,37,27,17,16,15,14,13,12,22,32,42,43
//44,45,46,36,26,25,24,23,33,34,35]
function spiralPrint(mat) {
  let startRow = 0;
  let startCol = 0;
  let maxRow = mat.length - 1;
  let maxCol = mat[0].length - 1;
  let totalEle = mat.length * mat[0].length;
  let count = 0;
  while (count < totalEle) {
    //left
    for (
      let row = startRow, col = startCol;
      row <= maxRow && count < totalEle;
      row++
    ) {
      console.log(mat[row][col]);
      count++;
    }
    startCol++;
    //bottom
    for (
      let col = startCol, row = maxRow;
      col <= maxCol && count < totalEle;
      col++
    ) {
      console.log(mat[row][col]);
      count++;
    }
    maxRow--;

    //right
    for (let row = maxRow, col = maxCol; row >= startRow && count < totalEle; row--) {
      console.log(mat[row][col]);
      count++;
    }
    maxCol--;

    //top
    for (
      let col = maxCol, row = startRow;
      col >= startCol && count < totalEle;
      col--
    ) {
      console.log(mat[row][col]);
      count++;
    }
    startRow++;
  }
}


spiralPrint(mat);