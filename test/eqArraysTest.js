const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe('#eqArrays', () => {
  it("returns false if arrays are not equal length", () => {
    assertEqual(eqArrays([1, 2, 3], [1, 2, 5, 3]), false);
  });
  it("returns true if arrays have equal elements", () => {
    assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false if arrays have different elements", () => {
    assertEqual(eqArrays([1, 2, 3], [1, 2, 9]), false);
  });
});