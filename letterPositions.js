const letterPositions = function(sentence) {
  const results = {};
  let stringWithoutWhitespace = sentence.replace(/\s/g, "");
  let letters = stringWithoutWhitespace.split("")
  letters.forEach((element, index) => {
    if (results[element]) {
      results[element].push(index);
    }
    else {
      results[element] = [index];
    }
  })
  return results;
};

module.exports = letterPositions;