const findKey = function (obj, callback) {
  let result = [];
  for (let key in obj) {
    if (callback(obj[key])) {
      result.push(key);
    } 
  }
  if (result.length === 0) {
    return undefined;
  }
  return result;
}

module.exports = findKey;