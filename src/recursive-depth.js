const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.calculateDepth = this.calculateDepth.bind(this)  
  }
  
  calculateDepth(arr) {
    if (arr instanceof Array) {
      if (arr.length === 0) {
        return 1
      } else {
        return 1 + Math.max(...arr.map(this.calculateDepth))
      }
    } else {
      return 0
    }
  }  
};