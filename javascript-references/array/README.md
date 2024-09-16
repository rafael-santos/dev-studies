# JS Array

## Destruction

## Methods

### Declaration

| Name | Description | JS Version |
| - | - | :-: |
| [`[]`](/javascript-references/array/array-declaration.md#literal-notation--) | Creates a new Array | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [`new Array()`](/javascript-references/array/array-declaration.md#new-array) | Creates a new Array | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [`of()`](/javascript-references/array/array-declaration.md#arrayof) | Creates an array from a number of arguments | ![Static Badge](https://img.shields.io/badge/ES6%20(2015)-f5f5f5) |
| [`from()`](/javascript-references/array/array-declaration.md#arrayfrom) | Creates an array from an object | ![Static Badge](https://img.shields.io/badge/ES6%20(2015)-f5f5f5) |

### Basic

| Name | Description | JS Version |
| - | - | :-: |
| [`length`](#) | Sets or returns the number of elements in an array |
| [`push()`](#) | Adds new elements to the end of an array, and returns the new length |
| [`pop()`](#) | Removes the last element of an array, and returns that element |
| [`concat()`](#) | Joins arrays and returns an array with the joined arrays |
| [`shift()`](#) | Removes the first element of an array, and returns that element |
| [`unshift()`](#) | Adds new elements to the beginning of an array, and returns the new length |
| [`slice()`](#) | Selects a part of an array, and returns the new array |
| [`splice()`](#) | Adds or Removes array elements |
| [`toSpliced()`](#) | Adds or Removes array elements (to a new array) |
| [`fill()`](/javascript-references/array/array-declaration.md#arrayfill) | Fill the elements in an array with a static value | ![Static Badge](https://img.shields.io/badge/ES6%20(2015)-f5f5f5) |
| [`join()`](#) | Joins all elements of an array into a string |
| [`toString()`](#) | Converts an array to a string, and returns the result |
| [`keys()`](#) | Returns a Array Iteration Object, containing the keys of the original array |
| [`entries()`](#) | Returns a key/value pair Array Iteration Object |
| [`isArray()`](#) | Checks whether an object is an array |

### Iteration

| Name | Description | JS Version |
| - | - | :-: |
| [`every()`](#) | Checks if every element in an array pass a test |
| [`filter()`](#) | Creates a new array with every element in an array that pass a test |
| [`flat()`](#) | Concatenates sub-array elements |
| [`flatMap()`](#) | Maps all array elements and creates a new flat array |
| [`forEach()`](#) | Calls a function for each array element |
| [`includes()`](#) | Check if an array contains the specified element |
| [`map()`](#) | Creates a new array with the result of calling a function for each array element |
| [`reduce()`](#) | Reduce the values of an array to a single value (going left-to-right) |
| [`reduceRight()`](#) | Reduce the values of an array to a single value (going right-to-left) |
| [`some()`](#) | Checks if any of the elements in an array pass a test |


### Searching

| Name | Description | JS Version |
| - | - | :-: |
| [`at()`](#) | Returns an indexed element of an array |
| [`find()`](#) | Returns the value of the first element in an array that pass a test |
| [`findIndex()`](#) | Returns the index of the first element in an array that pass a test |
| [`findLast()`](#) | Returns the value of the last element in an array that pass a test |
| [`findLastIndex()`](#) | Returns the index of the last element in an array that pass a test |
| [`indexOf()`](#) | Search the array for an element and returns its position |
| [`lastIndexOf()`](#) | Search the array for an element, starting at the end, and returns its position |

### Sorting

| Name | Description | JS Version |
| - | - | :-: |
| [`sort()`](#) | Sorts the elements of an array |
| [`toSorted()`](#) | Sorts the elements of an array (to a new array) |
| [`reverse()`](#) | Reverses the order of the elements in an array |
| [`toReversed()`](#) | Reverses the order of array elements (to a new array) |


### Other

Existing methods not covered in study, see W3School and MDN Docs references

| Name | Description | JS Version |
| - | - | :-: |
| `constructor` | Returns the function that created the Array prototype |
| `copyWithin()` | Copies array elements within the array, to and from specified positions |
| `prototype` | Allows you to add properties and methods to an Array object |
| `valueOf()` | Returns the primitive value of an array |
| `with()` | Returns a new array with updated elements |

## References
- [Array at W3Schools](https://www.w3schools.com/jsref/jsref_obj_array.asp)
- [Array at MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
