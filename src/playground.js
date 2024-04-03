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
const happyBirthdayPet = (breed, age) => {
    if (breed === 'snake') {
        console.log('Hiss hiss!')
    } else if (breed === 'cat' && age < 5) {
        console.log('Mew mew!')
    } else if (breed === 'cat' && age >= 5) {
        console.log('Meow meow!')
    } else if (breed === 'dog' && age < 5) {
        console.log('Arf arf!')
    } else if (breed === 'dog' && age >= 5 && age < 10) {
        console.log('Woof woof!')
    } else if (breed === 'dog' && age >= 10) {
        console.log('Boof!')
    } else {
        console.log('Happy birthday!')
    }
};
//   funTypes,
const funTypes = (jsType) => {
    if (typeOf.jsType === 'string') {
        console.log("That's just some text.")
    } else if (typeOf.jsType === 'number') {
        console.log("That's a good number.")
    } else if (typeOf.jsType === )
};

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
