const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if ((date === undefined) || (!date.getTime()))   {
    return "Unable to determine the time of year!"
  } else if ((!date instanceof Object) ) {
     throw new Error("Invalid type od date")
  } else {
    const month = date.getMonth()+1
    if ((month >= 9) && (month <=11)) {
      return "fall"
    } else if ((month >= 3) && (month <= 5)) {
      return "spring"
    } else if ((month >= 6) && (month <= 8)) {
      return "summer"
    } else {
      return "winter"
    }
  }
};
