const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const assertArrayEqual = function(arr1, arr2) {return (assertEqual(arr1,arr2))}


//function that finds middle element of an array
// if the array is even - return both middle numbers
// if array is odd - return one number
// if an array has one or two numbers - return an empty array

const middle = function(array) {
  let arrayLength = array.length;
  let result = [];
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 === 0) {
    let evenIndex1 = (arrayLength / 2) + 1;
    let evenIndex2 = (arrayLength / 2);
    result.push(evenIndex2, evenIndex1)
  }
  else if (array % 2 !== 0) {
    let oddIndex = Math.floor(array.length / 2) + 1;
    result.push(oddIndex);
  }
  return result;
};
