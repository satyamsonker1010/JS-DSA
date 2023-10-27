//Q1  -> Write a program to check if a given number is even or odd using bitwise AND.

let x = 500000000000001;
function checkEvenOdd(num) {
  if (num & 1) {
    console.log("Odd Number");
    return;
  } else {
    console.log("Even Number");
    return;
  }
}
checkEvenOdd(x);

