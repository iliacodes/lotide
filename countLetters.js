const assertEqual = require('./assertEqual')

const countLetters = function(string) {
  let stringWithoutWhitespace = string.replace(/\s/g, "");
  let letterObject = {};
  if (string.length === 0) {
    return "Please enter a string."
  }
  for (const letter of stringWithoutWhitespace) {
    if (!letterObject[letter]) {
      letterObject[letter] = 1;
    }
    else { 
      letterObject[letter] += 1;  
    }
  }
  return letterObject;
};

module.exports = countLetters;