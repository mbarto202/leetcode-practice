# Contains Duplicate

## Problem Summary

Return `true` if any number appears more than once in the array,  
otherwise return `false`.

## My Approach

- Use nested loops.
- Compare each pair of elements.
- Return `true` on first match.
- Return `false` if no matches found.

## What I Learned

- Brute force works but is slow for large arrays.
- Good starter problem for thinking about frequency.
- Set can solve this faster.

## Time Complexity

- Time: O(n²)
- Space: O(1)

## Revisit?

✅ Yes – try Set-based approach (O(n))
