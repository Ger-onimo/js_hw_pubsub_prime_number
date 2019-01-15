const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function () {


};

// 18. subscribe from form view using same channel name FormView:number-submitted
// takes 2 arguments - channel name it listens on FormView..., callback executed when number received
PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    console.log('payload received in PrimeChecker:', inputtedNumber);
  // 19. go to apps to add eventBinder
  // 20. back here to get results
    const checkNumber = this.numberIsPrime(inputtedNumber);
// 21. publish the PrimeChecker
    PubSub.publish('PrimeChecker:result-calculated', checkNumber);
  });
  // 22. now to subscribe result view....
};

// 7. write the method that takes in the users inputted
// and checks for the prime number (supplied)
PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    // return false;
    return 'Not a prime number.';
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
    // return false;
    return 'Not a prime number.';
   }
  }
    // return true;
    return 'Yes! It is a prime number.';
};

// 8. got to results view - set up file

module.exports = PrimeChecker;
