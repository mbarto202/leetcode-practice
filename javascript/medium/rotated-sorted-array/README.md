# Find Minimum in Rotated Sorted Array

## Problem Summary

You're given a rotated, sorted array of unique integers. Your goal is to return the **minimum element** in the array.

The solution must run in **O(log n)** time.

## My Approach

- Apply binary search.
- Compare the middle element with the left and right bounds.
- If the middle element is greater than the right, the minimum is in the right half.
- Otherwise, it's in the left half.
- Narrow the search window accordingly.

## What I Learned

- A rotated sorted array still has sorted sections you can use to apply binary search.
- If the middle is greater than the right, that means the smallest value is in the **unsorted** part.
- Binary search can be used beyond simple "target searching" — it's useful for **finding properties** (like minimums).

## Time Complexity

- Time: O(log n)
- Space: O(1)

## Revisit?

No – understood the pattern and logic.
