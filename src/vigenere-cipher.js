const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    this.direction = direction
  }
  
  encrypt(message, key) {
    let result = []
    let fullLengthKey = []
    let encryptMessage = []
    let diffDistance = 0
    
    if (!message || !key) {
      throw new Error ('Missed arguments')
    } else {
      
  //     making message array from message without symbols that exluded from alphabet
      const messageTemp = message.toUpperCase().split('')
      const messageArr = messageTemp.filter(element => this.alphabet.includes(element))
      const keyArr = key.toUpperCase().split('')

  //     making key phrase by length of message
      while (fullLengthKey.length <= messageArr.length) {
        fullLengthKey = fullLengthKey.concat(keyArr)
      }
      fullLengthKey.splice(messageArr.length - fullLengthKey.length, fullLengthKey.length)

  //     making encrypted message
      for (let i = 0; i < messageArr.length; i++){
          let encryptLetterIndex = (this.alphabet.indexOf(messageArr[i]) + this.alphabet.indexOf(fullLengthKey[i])) % this.alphabet.length
          encryptMessage.push(this.alphabet[encryptLetterIndex])
      }

  //     making result by adding symbols from starting message that excludes from alphabet
      for (let i = 0; i < messageTemp.length; i++) {
        if (this.alphabet.includes(messageTemp[i])) {
          result.push(encryptMessage[i - diffDistance])
        } else {
          result.push(messageTemp[i])
          diffDistance ++
        }
      }

      return (this.direction !== false) ?  result.join('') : result.reverse().join('') 
    } 
  }
  
  decrypt(message, key) {
    let result = []
    let fullLengthKey = []
    let decryptMessage = []
    let diffDistance = 0
    
    if (!message || !key) {
      throw new Error ('Missed arguments')
    } else {
      // making cipher message array from message without symbols that exluded from alphabet
      const messageTemp = message.toUpperCase().split('')
      const cipherMessageArr = messageTemp.filter(element => this.alphabet.includes(element))
      const keyArr = key.toUpperCase().split('')
      
      //     making key phrase by length of cipher message
      while (fullLengthKey.length <= cipherMessageArr.length) {
        fullLengthKey = fullLengthKey.concat(keyArr)
      }
      fullLengthKey.splice(cipherMessageArr.length - fullLengthKey.length, fullLengthKey.length)
      
      //     making decrypted message
      for (let i = 0; i < cipherMessageArr.length; i++){
          let decryptLetterIndex = (this.alphabet.indexOf(cipherMessageArr[i]) - this.alphabet.indexOf(fullLengthKey[i]) + this.alphabet.length) % this.alphabet.length
          decryptMessage.push(this.alphabet[decryptLetterIndex])
      }
      
       //     making result by adding symbols from starting message that excludes from alphabet
      for (let i = 0; i < messageTemp.length; i++) {
        if (this.alphabet.includes(messageTemp[i])) {
          result.push(decryptMessage[i - diffDistance])
        } else {
          result.push(messageTemp[i])
          diffDistance ++
        }
      }

      return (this.direction !== false) ?  result.join('') : result.reverse().join('')
      
    }
    
  }
}

module.exports = VigenereCipheringMachine;
