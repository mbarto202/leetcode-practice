// Two-Pointer

let left = 0;
let right = Array.length - 1;

while (left < right) {
  const sum = arr[left] + arr[right];

  if (sum === target) return [left, right];
  else if (sum < target) left++;
  else right--;
}

/*  ------------------------------------------------------------

    When to Use:
    - Sorted arrays or linked lists
    - Looking for pairs, duplicates, or intersections

    Practice Problems:
    - Two Sum 2(sorted array)
    - Container With Most Water
    - 3Sum(after sorting)

*/
