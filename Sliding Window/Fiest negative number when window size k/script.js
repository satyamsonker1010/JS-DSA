
//If negative number not present in subarray then return 0;
const arr = [12, -1, -7, 8, -15, 30, 16, 30];
//output =>  -1 , -1 ,  -7 , -15,-15 , 0
const k = 3;
const narr = [];
const subArr = [];
for (let i = 0; i < k; i++) {
  if (arr[i] < 0) {
    narr.push(arr[i]);
    break;
  }
}

for (let i = k; i < arr.length; i++) {
  let status = false;
  for (let j = i - k + 1; j <= i; j++) {
    if (arr[j] < 0) {
      if (!status) {
        narr.push(arr[j]);
        status = true;
      }
    }
    if (j === i && !status) {
      narr.push(0);
    }
  }
}

console.log(narr);
