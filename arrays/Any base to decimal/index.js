function anyToDecimal(num , numberGivenBase){
     let sum =0;
     let pow = 1;
    while(num>0){
        let digit  = num % 10;
        num = Math.floor(num/10);
        sum+= digit*pow;
        pow = pow*numberGivenBase;
    }
    return sum;
}

const output = anyToDecimal(1172 , 8);
console.log(output);