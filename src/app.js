// remember to require files needed
const FormView = require('./views/form_view.js')
const PrimeChecker = require('./models/prime_checker.js')
const ResultView = require('./views/results_view.js')

// 6. call form view's bindEvent for the event listener set-up
// in the app entry point
document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
// calling form view bind events
  formView.bindEvents();
// should now have access to inputted number in the console
});

// 7. got to prime_checker (set-up file to handle checker method)

  // 19. call for prime checker event listener
  const primeNumber = new PrimeChecker(); // NEW
  primeNumber.bindEvents();

  // 20. calculating result..go back to prime_checker...

  // 23. call for reults events eventListener
  const resultView = new ResultView(); // NEW
  resultView.bindEvents();
