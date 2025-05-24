# Product of Array Except Self

## Problem Summary

Return an array where each element is the product of all other elements except itself.  
Must solve in O(n) time and cannot use division.

## My Approach

- Try using one `for` loop to build prefix or suffix products.
- If stuck, use a hashmap or extra arrays to store running products.
- Avoid nested loops to keep it O(n).

## What I Learned

- Division makes this easy, but problem forces a real algorithmic solution.
- Need to build the result using prefix and suffix passes.
- This is a common array manipulation pattern.

## Time Complexity

- Time: O(n)
- Space: O(n) (extra arrays or hash maps allowed)

## Revisit?

Yes – revisit to optimize space (O(1) extra)
