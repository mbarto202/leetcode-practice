// function
const maxProduct = function (nums) {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];

    // If current number is negative, swap max and min
    if (current < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    // Update max and min product up to current position
    maxProduct = Math.max(current, current * maxProduct);
    minProduct = Math.min(current, current * minProduct);

    // Track the overall maximum product
    result = Math.max(result, maxProduct);
  }

  return result;
};

// test
console.log(maxProduct([2, 3, -2, 4]));
