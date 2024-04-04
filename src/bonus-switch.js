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

const rounderSwitch = () => {
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
