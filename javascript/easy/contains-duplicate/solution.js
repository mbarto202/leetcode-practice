// function
let duplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// test
console.log(duplicate([1, 2, 3, 2]));
console.log(duplicate([1, 2, 3, 4]));
