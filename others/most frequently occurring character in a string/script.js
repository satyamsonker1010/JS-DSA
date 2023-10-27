//most frequently occurring character in a string
// Dont use Inbuiild method

function countMostOccurringCharacter(str) {
  const breakStr = [...str];
  const mapData = new Map();
  for (let char of breakStr) {
    if (char !== " ") {
      if (mapData.has(char)) {
        mapData.set(char, mapData.get(char) + 1);
      } else {
        mapData.set(char, 1);
      }
    }
  }

  let maxCount = 0;
  let maxFrequency = "";
   
  for(let c of mapData){
    if(c[1] > maxCount){
        maxCount = c[1];
        maxFrequency = c[0];
    }
  }
   

//   const chnageInArray = [...mapData].sort((a,b)=> b[1]-a[1]).at(0);
  return [maxFrequency,maxCount]
}

const responseInArray = countMostOccurringCharacter("hi my name is  satyam")
console.log(`Most repeating character is "${responseInArray[0]}" and its repeat ${responseInArray[1]} times. `)
