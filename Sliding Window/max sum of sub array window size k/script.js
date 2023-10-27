//Find max sum of sub array if subarray size is k
//example => arr = [100, 200, 300, 400] k= 2
//output = [300,400] sum is 700

function maximumSum(arr, k) {
  let maxSum = -Infinity;
  let count = 0;
  let start = 0;
  let end = 0;

  if (arr.length < k) {
    return "Sorry k size is greater in array length.";
  }

  while (end < arr.length) {
    if (end - start === k - 1) {
      count = count + arr[end];
      maxSum = Math.max(maxSum, count);
      end++;
      count = count - arr[start];
      start++;
    } else {
      count += arr[end];
      end++;
    }
  }

  return maxSum;
}

const output = maximumSum([ 1, 4, 2, 10, 2, 3, 1, 0, 20 ], 4);
console.log(output);
