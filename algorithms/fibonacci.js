/*
 * Fibonacci value of index
 *
 * Given a index N return the index value of the Fibonacci sequence, where the sequence is:
 * F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	F11	F12	FN
 * 0	1	  1	  2	  3	  5	  8	  13	21	34	55	89	144	X
--------------------------------------------------------------------------------------------*/

// Fibonacci value using while loop
const fibonacciValue_while = (index) => {
  let result = 0;
  let a = 0;
  let b = 0;
  let currentIndex = 1; // Skipping index 0, result = 0

  while (currentIndex <= index) {
    a = b;
    b = result;
    result = a + b || 1; // Starting sequence with 1

    currentIndex ++;
  }

  return result;
}

// Fibonacci value using recursive calls
const fibonacciValue_recursive = (index) => {
  if(index <= 0) return 0;
  if(index == 1) return 1;

  const result = fibonacciValue_recursive(index - 1) + fibonacciValue_recursive(index - 2);

  return result;
}

// Fibonacci value using recursive calls and memoization
const fibonacciValue_recursiveMemo = (index, memo) => {
  memo = memo || {};

  if(memo[index]) return memo[index];
  if(index == 1) return 1;
  if(index <= 0) return 0;

  return memo[index] = fibonacciValue_recursiveMemo(index - 1, memo) + fibonacciValue_recursiveMemo(index - 2, memo);
}

/*
 * Fibonacci sequence until index
 *
 * Given a index N return an array with Fibonacci sequence until index:
 * N = 12, sequence = [0,1,1,2,3,5,8,13,21,34,55,89,144]
--------------------------------------------------------------------------------------------*/

// Fibonacci sequence using while loop
const fibonacciSequence_while = (index) => {
  let result = [0];
  let currentIndex = 1; // Skipping index 0, result = [0]

  while (currentIndex <= index) {
    a = result[currentIndex - 2] || 0;
    b = result[currentIndex - 1] || 1; // Starting sequence with 1 for index 1
    result.push(a + b);
    currentIndex ++;
  }

  return result;
}

// Fibonacci sequence using recursive calls
const fibonacciSequence_recursive = (index) => {
  if(index <= 0) return [0];

  const prevSequence = fibonacciSequence_recursive(index - 1);
  const a = prevSequence.at(-2) || 0;
  const b = prevSequence.at(-1) || 1; // Starting sequence with 1 for index 1
  const result = [...prevSequence, a + b];

  return result;
}

module.exports = { fibonacciValue_while, fibonacciValue_recursive, fibonacciValue_recursiveMemo, fibonacciSequence_while, fibonacciSequence_recursive };
