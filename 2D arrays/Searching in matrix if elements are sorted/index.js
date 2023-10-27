const mat = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
];

function searchEle(mat, target) {
  let row = 0;
  let col = mat[0].length - 1;

  while (col >= 0 && row < mat.length) {
    if (target === mat[row][col]) {
      console.log(row, col);
      return;
    } else if (target > mat[row][col]) {
      //move bottom
      row++;
    } else if (target < mat[row][col]) {
      // move left
      col--;
    }
  }
  console.log(-1);
}

searchEle(mat, 40);
