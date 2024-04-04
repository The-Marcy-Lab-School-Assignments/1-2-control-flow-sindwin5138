const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * (max - min) + min);
};

const coolnessGauge = (numOfFridges) => {
  return numOfFridges < 4 ? 'You need more fridges.' : 'You are downright chilly!';
};
//console.log(coolnessGauge(1))

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};

const getWeatherReport = (temperature) => {
  if (temperature > 90) {
    let weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
    console.log("And that's your report!");
    return weatherReport;
  } else if (temperature > 70) {
    let weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
    console.log("And that's your report!");
    return weatherReport;
  } else if (temperature >= 32 && temperature <= 70) {
    let weatherReport = "It's not too bad!";
    console.log(weatherReport);
    console.log("And that's your report!");
    return weatherReport;
  } else if (temperature < 32) {
    let weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
    console.log("And that's your report!");
    return weatherReport;
  }
};
//console.log(getWeatherReport(100))
//getWeatherReport(31)
//getWeatherReport(71)
//getWeatherReport(32)

const returnPositiveNegativeZero = (num) => {
  if (num === 0) {
    return "Zero"
  }
  return num > 0 ? "Positive" : "Negative";

};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
