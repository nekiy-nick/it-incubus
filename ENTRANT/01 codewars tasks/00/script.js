function sortIt(arr) {
  const copyArr = [...arr].sort((a, b) => a - b).map(num => String(num));
  let middleResultArr = [];
  
  for (let value of copyArr) {
    // console.log(typeof value)
//     middleResultArr.push(value.matchAll(`/${value}/g`));
  }
  
  console.log(copyArr)
}

sortIt([1,3,3,5,2,2,4,6,6,7,7,7]);
// must return [5,4,1,6,6,3,3,2,2,7,7,7];