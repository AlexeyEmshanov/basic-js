const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!isNaN(sampleActivity)) {
    const years = - Math.log( sampleActivity / MODERN_ACTIVITY ) * HALF_LIFE_PERIOD / Math.LN2
    return Math.ceil(years)
  } else {
    return false  
  }
};
