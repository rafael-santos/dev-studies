# JS Array - Declaration

| Name | Description | JS Version |
| - | - | :-: |
| [`[]`](/javascript-references/array/array-declaration.md#literal-notation--) | Creates a new Array | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [`new Array()`](/javascript-references/array/array-declaration.md#new-array) | Creates a new Array | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [`of()`](/javascript-references/array/array-declaration.md#arrayof) | Creates an array from a number of arguments | ![Static Badge](https://img.shields.io/badge/ES6%20(2015)-f5f5f5) |
| [`from()`](/javascript-references/array/array-declaration.md#arrayfrom) | Creates an array from an object | ![Static Badge](https://img.shields.io/badge/ES6%20(2015)-f5f5f5) |

### Literal notation [ ]
The bracket syntax is called an "array literal" or "array initializer." It's shorter than other forms of array creation, and so is generally preferred.

```javascript
// Create an empty array
const literal_array_1 = [];

// Create an array with initial values 1, 2, 3 and 4
const literal_array_2 = [1,2,3,4];

console.log(literal_array_1) // -> []
console.log(literal_array_2) // -> [1,2,3,4]
```

### new Array()

`new Array()` uses the constructor to create a new array with specified paramenters. It can be used with or without the `new` declaration.

```javascript
// Create an empty array
const new_array_1 = new Array();

// Create an array with string "abc"
const new_array_2 = new Array("abc");

// Create an array with initial values 1, 2, 3 and 4
const new_array_3 = new Array(1,2,3,4);

console.log(new_array_1); // -> []
console.log(new_array_2); // -> ["abc"]
console.log(new_array_3); // -> [1,2,3,4]
```

<b>☝️ Heads up!</b>

The first parameter of `Array()` constructor can be interpreted in two ways: As a value to initialize the array, or as the length to create the array. If the there is only one numeric paramenter in constructor, it will assume as the new Array length, creating an empty array with specified lenght.

In this case, it's best to use the `literal notation` or `Array.of()` to create the numeric array with single element.
```javascript
// Create an empty array with initial length of 3
const new_array_3 = new Array(3);

console.log(new_array_3); // -> [empty × 3]
console.log(new_array_3.length); // -> 3
```

### Array.of()

The `Array.of()` method creates a new array from any number of arguments. It works mostly like `new Array()`, but it always treats its arguments as elements to create a new array, even a single number.

```javascript
// Create an empty array
const array_of_1 = Array.of();

// Create an array with string "abc"
const array_of_2 = Array.of("abc");

// Create an array with number 3
const array_of_3 = Array.of(3);

// Create an array with initial values 1, 2, 3 and 4
const array_of_4 = Array.of(1,2,3,4);

console.log(array_of_1); // -> []
console.log(array_of_2); // -> ["abc"]
console.log(array_of_3); // -> [3]
console.log(array_of_34); // -> [1,2,3,4]
```

### Array.from()

The `Array.from()` method returns an <b>shallow copy</b> array from any <b>object with a length</b> property. It allows to use a "map" function to iterate de object and generate the new array. Moslty used to convert iterable objects (`Map`, `Set`) and `array-like` objects to arrays.

```javascript
// Syntax
Array.from(object, mapFunction, thisValue)
```
- object: (required) The object to convert to an array. <br>
- mapFunction: (optional) A map function to call on each item. <br>
- thisValue: (optional) A value to use as `this` for the mapFunction.

#### Example: Sequence generation using `Array.from()`

```javascript
// Syntax
// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

## References
- [Array at W3Schools](https://www.w3schools.com/jsref/jsref_obj_array.asp)
- [Array at MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
