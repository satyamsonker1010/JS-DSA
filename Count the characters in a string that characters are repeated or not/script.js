// Apple
//{'A':1,'p':2,'l':1,'e':1}

//Note : String contain only alphabates

//First Method
function characterCount(str) {
  const MapData = new Map();
  for (let i = 0; i < str.length; i++) {
    if (MapData.has(str[i])) {
      MapData.set(str[i], MapData.get(str[i]) + 1);
    } else {
      MapData.set(str[i], 1);
    }
  }
  return MapData;
}

const outpurData = characterCount("Apple");
console.log(outpurData);

/// Object method
function characterCountandReturnObject(str) {
  const objectData = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in objectData) {
      objectData[str[i]] += 1;
    } else {
      objectData[str[i]] = 1;
    }
  }
  return objectData;
}

const outputObjectData = characterCountandReturnObject("Apple");
console.log(outputObjectData);

///// for reduce method

function reduceMethodUse(str) {
  const updateString = str.replace(/[^a-zA-Z]/gi, "").split("");
  const getOutput = updateString.reduce((acum, current) => {
    if (current in acum) {
      acum[current] += 1;
    } else {
      acum[current] = 1;
    }
    return acum;
  }, {});
  return getOutput;
}

const outputObjectDataByReduce = reduceMethodUse("Apple");
console.log(outputObjectDataByReduce);
