// remember to require files needed
const FormView = require('./views/form_view.js')

// 6. call form view's bindEvent for the event listener set-up
// in the app entry point
document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
// calling form view bind events
  formView.bindEvents();
// should now have access to inputted number in the console
});

// 7. got to prime_checker (set-up file to handle checker method)
