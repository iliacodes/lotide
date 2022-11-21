const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays')

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

module.exports = middle;