# JS Array - Declaration

| Name | Description | JS Version |
| - | - | :-: |
| [[ ]](/javascript-references/array/array-declaration.md#literal-notation--) | Creates a new Array | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [new Array()](/javascript-references/array/array-declaration.md#new-array) | Creates a new Array | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [of()](/javascript-references/array/array-declaration.md#arrayof) | Creates an array from a number of arguments | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [from()](/javascript-references/array/array-declaration.md#arrayfrom) | Creates an array from an object | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [fill()](/javascript-references/array/array-declaration.md#arrayfill) | Fill the elements in an array with a static value | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |

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

Array of uses the constructor to create a new array with specified paramenters.

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

The first parameter of Array() constructor can be interpreted in two ways: As a value to initialize the array, or as the length to create the array. If the there is only one numeric paramenter in constructor, it will assume as the new Array length, creating an empty array with specified lenght.

In this case, it's best to use the `literal notation` or `Array.of()` to create the numeric array with single element.
```javascript
// Create an empty array with initial length of 3
const new_array_3 = new Array(3);

console.log(new_array_3); // -> [empty × 3]
console.log(new_array_3.length); // -> 3
```

### Array.of()

```javascript
```

### Array.from()

```javascript
```

### Array.fill()

```javascript
```

## References
- [Array at W3Schools](https://www.w3schools.com/jsref/jsref_obj_array.asp)
- [Array at MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
