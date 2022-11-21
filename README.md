# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @iliacodes/lotide`

**Require it:**

`const _ = require('@iliacodes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: checks to see if arrays are equal
* `assertEqual(actual, expected)`: checks, using strict equal, if the input is equal to the expected output
* `assertObjectsEqual(actual, expected)`: returns a boolean value for comparison of two objects
* `countLetters(string)`: counts the amount of times a letter is in this string
* `countOnly(allItems, itemsToCount`: counts the desired items within all the items
* `eqArrays(arr1, arr2)`: checks if arrays are equal
* `eqObjects(object1, object2)`: checks if objects are equal
* `findKey(obj, callback)`: checks an object to see if specified key is within the object
* `findKeyByValue(object, value)`: checks an object to find a value in order to output corresponding key
* `flatten(array)`: if there is one level of nested arrays, a single array is returned with all the elements.
* `head(arr)`: returns the first element in an array.
* `letterPositions(sentence)`: returns an object with letters representing the keys, and indices of occurance representing values.
* `map(array, callback)`: returns an array with desired modifications to the elements.
* `middle(arra)`: returns the middle element within an array. If the array has an even amount of elements, middle will return the two middle elements. If the array has less than three elements, an empty array is returned.
* `tail(arr)`: returns an array without the first element of the given array.
* `takeUntil(array, callback)`: will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(source, itemsToRemove)`: will return an array with items specified for removal from the inputted array.