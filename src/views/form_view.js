const PubSub = require('../helpers/pub_sub.js')

// 1. create form view for user input
const FormView = function () {

};

// 16. publish inputted number
FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    const inputtedNumber = event.target.number.value;
    // 17. name of the channel can be anything - use the name of
    // the component doing the publishing
    // 18. got to prime_number to subscribe...
    console.log(inputtedNumber);
    PubSub.publish('FormView:number-submitted', inputtedNumber); // MODIFIED
  });
};

// 2. set-up a bindEvents method to handle the listener for
// the submit event.
// get the form id to access the querySelector


// 6. got to app.js


module.exports = FormView;
