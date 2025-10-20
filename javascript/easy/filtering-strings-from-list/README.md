# Filter List

## Problem Summary

Given a list of non-negative integers and strings, return a new list with only the integers.

## My Approach

- Used `.filter()` to check each element's type.
- Returned only elements where `typeof item === 'number'`.

## What I Learned

- `.filter()` is a clean way to remove items from an array.
- `typeof` is useful for distinguishing between numbers and strings.

## Time Complexity

- Time: O(n)
- Space: O(n)

## Revisit?

No
