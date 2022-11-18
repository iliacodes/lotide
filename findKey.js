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


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma")

console.log(findKey({
}, x => x.stars === 2))