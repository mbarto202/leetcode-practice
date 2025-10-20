# Product of Array Except Self

## Problem Summary

Return a new array where each element is the product of all other elements  
in the input array, except itself. No division allowed. Must run in O(n).

## My Approach

- One loop to build left products.
- One loop (in reverse) to apply right products.
- Final array is the product of left \* right for each index.

## What I Learned

- Two loops is still O(n) if they aren't nested.
- Skipping the "self" is automatic if you build from both sides.
- Prefix/suffix is a powerful array strategy.

## Time Complexity

- Time: O(n)
- Space: O(n) (or O(1) extra if we only use the output array)

## Revisit?

Yes – revisit to reduce space further if needed.
