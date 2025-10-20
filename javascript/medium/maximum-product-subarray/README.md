# Maximum Product Subarray

## Problem Summary

Given an array of integers, return the largest product of any contiguous subarray.

## My Approach

- Loop through array once (O(n))
- Track three variables:
  - `maxProduct`: max product ending at current index
  - `minProduct`: min product ending at current index (needed for negatives)
  - `globalMax`: overall max product found

## What I Learned

- Tracking both max and min is key when negatives are involved
- Can use one pass instead of nested loops
- Similar to max subarray sum, but trickier due to sign flipping

## Time Complexity

- Time: O(n)
- Space: O(1)

## Revisit?

Yes – tricky logic with negatives
