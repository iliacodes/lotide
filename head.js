const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};


const head = function(arr) {
    return arr[0];
};

