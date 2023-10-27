//// find longest subarray of that size is k
//[4,1,1,1,2,3,5] k =5

// [4,1]
//[1,1,1,2]
//[2,3]

function longSubArray(arr, k) {
  let start = 0;
  let end = 0;
  let indexes = 0;
  let maxlength = 0;
  let startIndex = -1;
  let endIndex = -1;
  let count = 0;
  while (end <= arr.length) {
    if (count === k) {
      // indexes = indexes + start + "-" + (end - 1) + " $ ";
      indexes = end - start;
      if (indexes > maxlength) {
        startIndex = start + 1;
        endIndex = end - 1 + 1;
      }
      maxlength = Math.max(maxlength, indexes);

      end = start + 1;
      start++;
      count = 0;
    } else {
      if (count > k) {
        end = start + 1;
        start++;
        count = 0;
      } else {
        count += arr[end];
        end++;
      }
    }
  }
  return `${startIndex} ${endIndex}`;
}

const output = longSubArray([135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28 ,37 ,192, 5 ,103, 154, 93 ,183, 22, 117, 119, 96 ,48 ,127, 172, 139, 70 ,113, 68, 100, 36 ,95, 104, 12, 123, 134], 468);
console.log(output);
