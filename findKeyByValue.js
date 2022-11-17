const findKeyByValue = function (object, value) {
  let result = undefined;
  //let newObj = Object.keys(object);
  for (let key in object) {
    if (object[key] === value) {
      result = key;
    }
  }
  return result;
};
