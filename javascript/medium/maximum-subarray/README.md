# Maximum Subarray

## Problem Summary

Given an integer array, find the subarray with the largest sum and return its sum.

## My Approach

- Use a single loop.
- Track `currentSum` and `maxSum`.
- For each element:
  - Decide whether to start fresh from `nums[i]` or keep adding to the current sum.

## What I Learned

- A single loop can solve this without nested iterations.
- Compare `nums[i]` vs. `currentSum + nums[i]` to decide the best path forward.
- This pattern helps in other dynamic problems too.

## Time Complexity

- Time: O(n)
- Space: O(1)

## Revisit?

No — understood well.
