const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {

  let count = 0
  backyard.forEach(arr => {
    for (const element of arr) {
      if (element === '^^') {
        count ++
      }
    }
  })
  return count
};
