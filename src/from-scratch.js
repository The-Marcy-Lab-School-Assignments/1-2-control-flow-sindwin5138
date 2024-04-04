const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought')
  } else if (inches > 0 && inches < 2) {
    console.log('dry')
  } else if (inches < 4) {
    console.log('average')
  } else if (inches < 6) {
    console.log('rainy')
  } else {
    console.log('flood')
  }
};

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

const funTypes = (jsType) => {
  if (typeof jsType == 'string') {
    console.log("That's just some text.")
  } else if (Number.isNaN(jsType) === true) {
    console.log("Well, now you're just showing off.")
  } else if (typeof jsType === 'number') {
    console.log("That's a good number.")
  } else if (typeof jsType === 'boolean') {
    console.log("To bool, or not to bool?")
  } else if (typeof jsType === 'undefined') {
    console.log("Nothing, but I didn't set that.")
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.")
  } else if (Array.isArray(jsType) === true) {
    console.log("I order you to be indexed.")
  } else if (typeof jsType === 'object') {
    console.log("Anybody got the key?")
  }
};
funTypes(NaN)

const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float)
  } else if (roundingSetting === 'down') {
    return Math.floor(float)
  } else {
    return Math.round(float)
  }
};

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzBuzz!')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(num)
  }
};

fizzBuzzish(30)
module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
