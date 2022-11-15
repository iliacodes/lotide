const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const assertArraysEqual = function(arr1, arr2) {return (assertEqual(arr1,arr2))}

const without = function (source, itemsToRemove) {
  result = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        result.push(source[i]);
      }
    }
  }
  return result;
};