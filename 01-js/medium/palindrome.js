/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^\w]/g, "");
  console.log(str);

  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    let ch1 = str.charAt(start);
    let ch2 = str.charAt(end);

    if (ch1 !== ch2) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome("Eva, can I see bees in a cave?"));

module.exports = isPalindrome;
