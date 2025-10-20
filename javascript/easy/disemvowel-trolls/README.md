# Disemvowel Trolls

## Problem Summary

Remove all vowels (`a, e, i, o, u` – both uppercase and lowercase) from a given string. Return the cleaned-up string.

## My Approach

- Split the string into an array of characters.
- Loop through the array.
- If the character is a vowel, remove it by setting it to an empty string.
- After the loop, join the array back into a string and return it.

## What I Learned

- How to manipulate arrays and strings using `.split()` and `.join()`.
- How to check for both uppercase and lowercase vowels.
- Mutating array values and handling empty strings.

## Time Complexity

- Time: O(n)
- Space: O(n)

## Revisit?

No – solid understanding.
