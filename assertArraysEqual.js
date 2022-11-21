const assertEqual = require('./assertEqual');

const assertArraysEqual = function(arr1, arr2) {return (assertEqual(arr1,arr2))};

module.exports = assertArraysEqual;