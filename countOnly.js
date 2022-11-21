const assertEqual = require('./assertEqual')

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (results === itemsToCount){
      return results++;
    }
  }
  return results;
};

module.exports = countOnly;