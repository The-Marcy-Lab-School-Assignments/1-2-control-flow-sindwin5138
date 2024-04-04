const wildlyBiasedReview = (location) => {
  if (typeof location !== 'string') {
    return null
  }
  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS')
    console.log('WOW WHAT A CITY')
  } else {
    console.log('Yea that place is cool I guess');
  }
};
wildlyBiasedReview('NYC')
wildlyBiasedReview
module.exports = {
  wildlyBiasedReview,
};
wildlyBiasedReview('LA')