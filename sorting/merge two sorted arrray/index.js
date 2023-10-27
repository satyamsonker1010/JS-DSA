const arr1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];

function merge(one, two) {
  let i = 0;
  let j = 0;
  let k =0;
  const arr = [];
  while (i < one.length && j < two.length) {
    if (one[i] <= two[j]) {
      arr[k] = one[i];
      i++;
      k++;
    }
    if (one[i] > two[j]) {
      arr[k]=two[j];
      j++;
      k++;
    }
  }
  
  while(i<one.length){
    arr[k++]=one[i++];
  }

  while(j<two.length){
    arr[k++]=two[j++];
  }
  return arr;
}

console.log(merge(arr1, arr2));
