const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  function rowToCol(arr) {
    for (let col = 0; col < arr.length; col++) {
      let str = "";
      for (row = 0; row < arr.length; row++) {
        str = str + arr[row][col] + " ";
      }
      console.log(str);
    }
  }