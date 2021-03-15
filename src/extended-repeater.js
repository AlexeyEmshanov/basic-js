const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options.separator) {
    options.separator = '+'
  }
  
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }
  
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }
  
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1
  }
  
  let additionString = (options.addition !== undefined) ? (options.addition + options.additionSeparator) : ''
  additionString = additionString.repeat(options.additionRepeatTimes).slice(0, -options.additionSeparator.length)
  
  let string = str + additionString + options.separator
  string = string.repeat(options.repeatTimes).slice(0, -options.separator.length)
  
  return string
};
  