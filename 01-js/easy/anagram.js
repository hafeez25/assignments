/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const arr = new Array(256).fill(0);
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    let num = str1.toLowerCase().charCodeAt(i);

    arr[num]++;
  }
  for (let i = 0; i < str2.length; i++) {
    let num = str2.toLowerCase().charCodeAt(i);
    arr[num]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
