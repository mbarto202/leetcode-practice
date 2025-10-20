// function
const productExceptSelf = function (nums) {
  // fills array with 1 for multiplication
  const result = new Array(nums.length).fill(1);

  let prefix = 1;
  let suffix = 1;

  // prefix products
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // suffix products
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};

// test
console.log(productExceptSelf([1, 2, 3, 4]));
