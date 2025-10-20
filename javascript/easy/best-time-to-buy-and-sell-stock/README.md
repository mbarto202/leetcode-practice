# Best Time to Buy and Sell Stock

## Problem Summary

You're given an array `prices` where `prices[i]` represents the stock price on day `i`.  
You can buy once and sell once later. Return the **maximum profit** you can achieve.  
If no profit is possible, return `0`.

## My Approach

- Use nested loops.
- Outer loop picks a day to buy (`i`).
- Inner loop picks a later day to sell (`j`).
- Calculate the profit (`prices[j] - prices[i]`).
- Track and update `maxProfit` if it's higher than the current.

## What I Learned

- It's important that the sell day is after the buy day.
- Brute-force solutions work for small input sizes.
- Looping through every pair builds foundational logic.
- This can be optimized to O(n) by tracking the minimum price seen so far.

## Time Complexity

- Time: O(n²)
- Space: O(1)

## Revisit?

Yes – optimize with one-pass min price tracking
