const eqObjects = require('./eqObjects');

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected) === true) {
    return "✅✅✅ Assertion Passed: [object Object] === [object Object]";
  } else {
    return "🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]";
  }
};

module.exports = assertObjectEqual;