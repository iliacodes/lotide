const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

describe('#assertArraysEqual', () => {
  it("returns true if arrays are equal", () => {
    eqArrays(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("return false if the arrays aren't equal", () => {
    eqArrays(assertArraysEqual([1, 2, 3], [1, 2, 3, 4]), false)
  })
});