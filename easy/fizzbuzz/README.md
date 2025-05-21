# FizzBuzz

## Problem Summary

Print numbers from 1 to 100.

- If a number is divisible by 3, print `"Fizz"`.
- If it's divisible by 5, print `"Buzz"`.
- If divisible by both 3 and 5, print `"FizzBuzz"`.
- Otherwise, print the number itself.

## My Approach

- Use a `for` loop from 1 to 100.
- Use `if...else if...else` to check for divisibility:
  - First check `i % 3 === 0 && i % 5 === 0`
  - Then check `i % 3 === 0`
  - Then check `i % 5 === 0`
- Print each result using `console.log()`.

## What I Learned

- How the `%` (modulo) operator works to check divisibility.
- Why the order of conditions matters (check `FizzBuzz` before `Fizz` or `Buzz`).
- Simple logic can be made very readable with clean if/else chaining.

## Time Complexity

- Time: O(1) — constant, since it's always 100 iterations
- Space: O(1) — no extra memory used

## Revisit?

No – I understand this well and can write it from memory.
