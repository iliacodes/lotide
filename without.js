const assertEqual = require('./assertEqual')

const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = without;