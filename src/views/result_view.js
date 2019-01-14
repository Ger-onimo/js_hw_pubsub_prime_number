const PubSub = require('../helpers/pub_sub.js')

// 8. set up results view
// responsible for rendering the result taken
// from the prime number model to the page view
const ResultView = function () {


};

// 22. this is the binder for results view
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const resultMessage = event.detail;
    console.log('payload received in ResultView:', resultMessage);
    this.displayResult(resultMessage);
  });
  // 23. go back to app.js..
};

// 11. get the PubSub helper

// 9. write a method that provides a message output to the page
// with the result - displayResult.
// gets the result of the prime_checker method - numberIsPrime
// at this point the model and views aren't all talking to each other.
ResultView.prototype.displayResult = function (result) { // pass in result
// 10 .get the DOM element id for result from html - "result"
  const resultElement = document.querySelector('#result');
  // resultElement.textContent = result;
  if (result === true) {
    return resultElement.textContent = `Yes! is a prime number.`
  }
  else {
    return resultElement.textContent = `Nope! is not a prime number.`
  }

};


module.exports = ResultView;

// think this needs a conditional
  //   if (???) {
  //     return resultElement.textContent = `Yes! #{result} is a prime number.`;
  //   }
  //   else {
  // return resultElement.textContent = `Nope! #{result} is not a prime number.`;
  //   }
// };
