

// 1. create form view for user input
const FormView = function () {

};

// 2. set-up a bindEvents method to handle the listener for
// the submit event.
// get the form id to access the querySelector

FormView.prototype.bindEvents = function () {
  form = document.querySelector('#prime-checker-form');
  // 3. add in eventListener
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // 4. check the id in html for the value type
    const inputtedNumber = event.target.number.value;
    // 5.  log the value of the inputted Number
    console.log('Inputted number', inputtedNumber);
  })
};

// 6. got to app.js


module.exports = FormView;
