// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    let max = 0;
    let maxChar = '';
  
    for (let letter of str) {
      !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
    }
  
    for (let letter in obj) {
      if (obj[letter] > max) {
        max = obj[letter];
        maxChar = letter;
      }
    }
  
    return maxChar;
  }
  
  maxChar('hello There!');
  


module.exports = maxChar;
