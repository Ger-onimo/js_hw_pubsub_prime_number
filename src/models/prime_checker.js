const PrimeChecker = function () {


};

// 7. write the method that takes in the users inputted
// and checks for the prime number (supplied)
PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
      }
    }
    return true;
};

// 8. got to results view - set up file

module.exports = PrimeChecker;
