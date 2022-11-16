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

const assertEqualArrays = function(arr1, arr2) {return (assertEqual(arr1,arr2))}

const flatten = function (array) {
  return array.flat();
};
