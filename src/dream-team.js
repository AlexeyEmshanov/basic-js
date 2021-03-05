const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const shortList = []
  if (Array.isArray(members)) {
    members.map((element) => {
      if (typeof element !== "string") {
        return false
      } else {
        let stringWithoutWS = element.replace(/\s/g, '')
        shortList.push(stringWithoutWS[0].toUpperCase())
      }
    })  
  } else {
    return false
  }
  
  const stringList = shortList.sort().join('')
  if (!stringList) {
    return false
  } else {
    return stringList
  }  
};
