function sortIt(arr) {
  const copyArr = [...arr].sort((a, b) => a - b);
  const counterMatches = {};
  const lengthMatchesArray = [];

  const makeSubArray = (value, lot) => {
  	const subArray = [];
  	let i = lot;

  	while (i !== 0) {
  		subArray.push(value);
  		i--;
  	}

  	lengthMatchesArray.push(subArray);
  };

  for (let value of copyArr) {
    if (counterMatches[value] === undefined) {
    	counterMatches[value] = 1;
    } else {
    	counterMatches[value]++;
    }
  }

  for (value in counterMatches) {
  	makeSubArray(value, counterMatches[value]);
  }

  const sortByLengthArray = lengthMatchesArray.sort((prev, next) => prev.length - next.length);

  const resultArray = [];

  console.log(resultArray)
}

sortIt([1,3,3,5,2,2,4,6,6,7,7,7]);
// must return [5,4,1,6,6,3,3,2,2,7,7,7];