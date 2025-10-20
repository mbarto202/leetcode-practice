// function
const maxSumSubarray = function (nums) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// test
console.log(maxSumSubarray([2, 1, 3, -8, 5, 6]));
