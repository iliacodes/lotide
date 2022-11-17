const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
      let result = eqArrays(object1[key], object2[key])
      if (!result) {
        return false;
      }
    }
      else if (object1[key] !== object2[key]) {
        return false;
    }
  }
  return true;
};

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected) === true) {
    return "✅✅✅ Assertion Passed: [object Object] === [object Object]";
  } else {
    return "🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]";
  }
};

console.log(assertObjectEqual({1:2, 3:4}, {1:2, 3:4}))