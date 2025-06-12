function getCount(str) {
  // Turn the string into an array of characters
  const arr = str.split("");
  let count = 0;

  // Loop through each character
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}
