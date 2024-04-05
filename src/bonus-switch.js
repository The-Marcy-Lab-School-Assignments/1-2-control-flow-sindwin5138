const measureRainSwitch = (inches) => {
  switch (true) {
    case (inches === 0):
      console.log("drought");
      break;
    case (inches > 0 && inches < 2):
      console.log("dry");
      break;
    case (inches < 4):
      console.log("average");
      break;
    case (inches < 6):
      console.log("rainy");
      break;
    default:
      console.log("flood")
  }
};
//measureRainSwitch(0)
//measureRainSwitch(3)

const rounderSwitch = (float, roundSetting) => {
  switch (true) {
    case (roundSetting === 'up'):
      return (Math.ceil(float))

    case (roundSetting === 'down'):
      return (Math.floor(float))

    default:
      return (Math.round(float))

  }
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};

//Switch cases test expressions based off strict equality and typically only deal with a single data type. If and Else conditions allow logical operations and can test a range.