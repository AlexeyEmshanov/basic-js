const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let copyArr = arr.slice()
  const control = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'] 

  if (arr instanceof Array) {
      for (let i = 0; i < arr.length; i++) {
          if (control.includes(copyArr[i]) && control.includes(copyArr[i+1])) {
              copyArr.splice(i, 2)
              i--
          } else if (copyArr[i] === '--discard-next') {
              if (i === copyArr.length - 1) {
                  copyArr.splice(i, 1)
              } else {
                  copyArr.splice(i+1 , 1)
                  i--
              }
              
          } else if (copyArr[i] === '--discard-prev') {
              if(i === 0) {
                  copyArr.splice(i, 1)
              } else {
                  copyArr.splice(i-1, 2)
                  i--
              }
              
          } else if (copyArr[i] === '--double-next') {
              if(i === copyArr.length - 1) {
                  copyArr.splice(i, 1)
              } else {
                  copyArr.splice(i, 1, copyArr[i+1])
                  i--
              }
              
          } else if (copyArr[i] === '--double-prev') {
              if (i === 0) {
                  copyArr.splice(i, 1)
              } else {
                  copyArr.splice(i, 1, copyArr[i-1])
                  i--
              }
              
          } 

      }
  } else {
      throw new Error('Argument is not an Array')
  }
  return copyArr
};
