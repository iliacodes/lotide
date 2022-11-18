
const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  let result = []
  for (let element of array) {
    result.push((callback(element)))
  }
  return result;
}

const results1 = map(words, word => word[0]);
console.log(results1);
