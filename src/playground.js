// const {
//   measureRain,
const measureRain = (inches) => {
    if (inches === 0) {
        console.log('drought')
    } else if (inches > 0 && inches < 2) {
        console.log('dry')
    } else if (inches >= 2 && inches < 4) {
        console.log('average')
    } else if (inches >= 4 && inches < 6) {
        console.log('rainy')
    } else {
        console.log('flood')
    }
};
//   happyBirthdayPet,
//   funTypes,
//   rounder,
//   fizzBuzzish,
// } = require('./from-scratch');
// const {
//   getRandomIntInRange,
//   coolnessGauge,
//   funkoPopAddictionLevel,
//   getWeatherReport,
//   returnPositiveNegativeZero,
// } = require('./debug');
// const { wildlyBiasedReview } = require('./modify');
