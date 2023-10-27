//O(n);

function nextRightGreater(arr) {
  const result = [];
  const stack = [];
  result.push(-1);
  for (let i = arr.length - 2; i >= 0; i--) {
    ///this loop not run every time 
    while (stack[stack.length - 1] <= arr[i] && stack.length > 0) {
      stack.pop();
    }
    if(stack.length >0){
        result.unshift(stack[stack.length - 1]);
    }else{
        result.unshift(-1);
    }
    stack.push(arr[i]);
  }
  return result;
}

const arrData = [2,5,9,3,1,12,6,8,7];// 5 9 12 12 12 -1 8 -1 -1
const output = nextRightGreater(arrData);
console.log(output);
