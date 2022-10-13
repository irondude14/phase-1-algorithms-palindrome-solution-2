function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i
    if (word[i] !== word[j]) return false;
  }
  return true;
}

/* 
  iterate from beginning to the middle
    check each letter to the corresponding letter from the end
      if any letter don't match, return false
  
  else, return true
*/

/*
  Function returns true is the word is palidrome. Checks first and last, second and next to last letters.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
