function useFullBracket(str) {
  const stack = [];
  for(let i =0;i<str.length;i++){
    if(str[i] !== ")"){
        stack.push(str[i]);
    }else{
        if(stack[stack.length-1] === "("){
           return false;
        }
        while(stack[stack.length-1] !== "("){
            stack.pop();
        }
        stack.pop();
    }
  }
  return stack.length === 0;
}


//((a+b)+((c+d)));
//'((a+b)+(c+d))'
const strData = '((a+b)+((c+d)))';
const strData2 = '((a+b)+(c+d))'

const output = useFullBracket(strData);
const output2 = useFullBracket(strData2);
console.log("output" , output);
console.log("output2" , output2);

