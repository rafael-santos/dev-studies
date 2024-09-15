# JS Array - Declaration

| Name | Description | JS Version |
| - | - | :-: |
| [[ ]](#) | Creates a new Array | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [new Array()](#) | Creates a new Array | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [of()](#) | Creates an array from a number of arguments | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [from()](#) | Creates an array from an object | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |
| [fill()](#) | Fill the elements in an array with a static value | ![Static Badge](https://img.shields.io/badge/ES1%20(1997)-f5f5f5) |

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

// Create an array with initial values 1, 2, 3 and 4
const new_array_2 = new Array(1,2,3,4);

console.log(new_array_1); // -> []
console.log(new_array_2); // -> [1,2,3,4]
```

> ⚠️ Careful

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
