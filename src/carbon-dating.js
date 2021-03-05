const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof sampleActivity !== "string" ) || (isNaN(sampleActivity)) ) {
    return false  
    
  } else {
    const years = - Math.log( sampleActivity / MODERN_ACTIVITY ) * HALF_LIFE_PERIOD / Math.LN2
    return ((Math.ceil(years) !== Infinity) && (Math.ceil(years) > 0)) ? Math.ceil(years) : false
  }
};
