const { fibonacciValue_while, fibonacciValue_recursive, fibonacciValue_recursiveMemo, fibonacciSequence_while, fibonacciSequence_recursive } = require("./fibonacci");

describe("Fibonacci value of index", () => {
  it("returns 0 when index is less than 0", () => {
    expect(fibonacciValue_while(-3)).toBe(0);
    expect(fibonacciValue_recursive(-3)).toBe(0);
    expect(fibonacciValue_recursiveMemo(-3)).toBe(0);
  });

  it("returns 0 when index is 0", () => {
    expect(fibonacciValue_while(0)).toBe(0);
    expect(fibonacciValue_recursive(0)).toBe(0);
    expect(fibonacciValue_recursiveMemo(0)).toBe(0);
  });

  it("returns 1 when index is 1", () => {
    expect(fibonacciValue_while(1)).toBe(1);
    expect(fibonacciValue_recursive(1)).toBe(1);
    expect(fibonacciValue_recursiveMemo(1)).toBe(1);
  });

  it("returns 1 when index is 2", () => {
    expect(fibonacciValue_while(2)).toBe(1);
    expect(fibonacciValue_recursive(2)).toBe(1);
    expect(fibonacciValue_recursiveMemo(2)).toBe(1);
  });

  it("returns 21 when index is 8", () => {
    expect(fibonacciValue_while(8)).toBe(21);
    expect(fibonacciValue_recursive(8)).toBe(21);
    expect(fibonacciValue_recursiveMemo(8)).toBe(21);
  });

  it("returns 144 when index is 12", () => {
    expect(fibonacciValue_while(12)).toBe(144);
    expect(fibonacciValue_recursive(12)).toBe(144);
    expect(fibonacciValue_recursiveMemo(12)).toBe(144);
  });
});

describe("Fibonacci sequence until index", () => {
  it("returns [0] when index is less than 0", () => {
    expect(fibonacciSequence_while(-3)).toEqual([0]);
    expect(fibonacciSequence_recursive(-3)).toEqual([0]);
  });

  it("returns [0] when index is 0", () => {
    expect(fibonacciSequence_while(0)).toEqual([0]);
    expect(fibonacciSequence_recursive(0)).toEqual([0]);
  });

  it("returns [0,1] when index is 1", () => {
    expect(fibonacciSequence_while(1)).toEqual([0,1]);
    expect(fibonacciSequence_recursive(1)).toEqual([0,1]);
  });

  it("returns [0,1,1] when index is 2", () => {
    expect(fibonacciSequence_while(2)).toEqual([0,1,1]);
    expect(fibonacciSequence_recursive(2)).toEqual([0,1,1]);
  });

  it("returns [0,1,1,2,3,5,8,13,21] when index is 8", () => {
    expect(fibonacciSequence_while(8)).toEqual([0,1,1,2,3,5,8,13,21]);
    expect(fibonacciSequence_recursive(8)).toEqual([0,1,1,2,3,5,8,13,21]);
  });

  it("returns [0,1,1,2,3,5,8,13,21,34,55,89,144] when index is 12", () => {
    expect(fibonacciSequence_while(12)).toEqual([0,1,1,2,3,5,8,13,21,34,55,89,144]);
    expect(fibonacciSequence_recursive(12)).toEqual([0,1,1,2,3,5,8,13,21,34,55,89,144]);
  });
});
