# Get Middle Character(s)

## Problem Summary

Given a string, return the middle character if the string's length is odd, or return the two middle characters if the string's length is even.

## My Approach

- Created a function called `getMiddle`.
- Made a constant called `middle` and set it equal to `Math.floor(s.length / 2)`.
- If the string length is even, return `s[middle - 1] + s[middle]`.
- Else, return `s[middle]`.

## What I Learned

- How to use `Math.floor()` to find the middle index.
- How to conditionally return one or two characters based on even/odd string length.
- Practiced clean and simple return statements.

## Time Complexity

- Time: O(1)
- Space: O(1)

## Revisit?

No — very comfortable with this one.
