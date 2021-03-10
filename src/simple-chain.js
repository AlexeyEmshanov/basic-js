const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resChain : [],
  
  getLength() {
    return this.resChain.length
  },
  
  addLink(value) {
      if (typeof value !== 'undefined') {
        this.resChain.push(`( ${value} )~~`)
        return chainMaker  
      } else {
        this.resChain.push(`( )~~`)  
        return chainMaker  
      }
  },
  
  removeLink(position) {
    if (isNaN(position) || (position>= this.getLength(this.resChain)) || (position % 1 !== 0) || (position <= 0)) {
      throw new Error ('Invalid position input')
      this.resChain = []
    } else {
      this.resChain.splice(position - 1 , 1)
      return chainMaker  
    }
    
  },
  
  reverseChain() {
    this.resChain.reverse()
    return chainMaker
  },
  
  finishChain() {
    return this.resChain.join('').substring(0, this.resChain.join('').length - 2)
    this.resChain = []
  }
};

module.exports = chainMaker;
