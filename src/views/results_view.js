
// 8. set up results view
// responsible for rendering the result taken
// from the prime number model to the page view
const ResultsView = function () {


};

// 9. write a method that provides a message output to the page
// with the result - displayResult.
// gets the result of the prime_checker method - numberIsPrime
// at this point the model and views aren't all talking to each other.
ResultsView.prototype.displayResult = function (result) { // pass in result
// 10 .get the DOM element id for result from html - "result"
  const resultElement = document.querySelector('#result');
// think this needs a conditional
    if (numberIsPrime == true) {
      return resultElement.textContent = `Yes! #{result} is a prime number.`;
    }
    else {
  return resultElement.textContent = `Nope! #{result} is not a prime number.`;
    }
};


module.exports = ResultsView;
