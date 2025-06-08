// function
const filter = function (arr) {
  return arr.filter((item) => typeof item === "number");
};

// test
console.log(filter([1, 2, 3, "hi", 4]));
