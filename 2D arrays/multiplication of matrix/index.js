const mat1 = [
  [1, 2, 3],
  [4, 5, 6],
];
//2*3
//3*3
const mat2 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
//m00 = mat1[0][0]*mat2[0][0]
//     +mat1[0][1]*mat2[1][0]
//     +mat1[0][2]*mat2[2][0]

//m01 = mat1[0][0]*mat2[0][1]
//     +mat1[0][1]*mat2[1][1]
//     +mat1[0][2]*mat2[2][1]

function matrixArr(Realrow, Realcol, defaultValue) {
  let mat = [];
  for (let row = 0; row < Realrow; row++) {
    let rowData = [];
    for (let col = 0; col < Realcol; col++) {
      rowData.push(defaultValue);
    }
    mat.push(rowData);
  }
  return mat;
}

const row = mat1.length;
const col = mat2[0].length;

const mat = matrixArr(row, col, 0);

for (let row = 0; row < mat.length; row++) {
  for (let col = 0; col < mat[0].length; col++) {
    for (let k = 0; k < mat[0].length; k++) {
      mat[row][col] += mat1[row][k] * mat2[k][col];
    }
  }
}

console.log(mat);
