import { loginUser } from './loginFunction.mjs';
import { LOGIN_URL } from './variables.mjs';
import { regexCheck, checkLength } from './validation.mjs';
const email = document.getElementById('email');
const emailLabel = document.getElementById('emailLabel');
const password = document.getElementById('password');
const passwordLabel = document.getElementById('passwordLabel');
const loginBtn = document.getElementById('loginBtn');
const errorCon = document.querySelector('.infoText');
const h1 = document.querySelector('h1');
/**
 * evenntlistener that runs when login button is pressed it then uses validation functions to see if all input fields passes it then runs the login funnction
 */
loginBtn.addEventListener('click', (click) => {
  click.preventDefault();
  regexCheck(email, 'Email', emailLabel, '@stud.noroff.no');
  checkLength(password, 8, 'Password', passwordLabel, 'text-white');
  if (
    regexCheck(email, 'Email', emailLabel, '@stud.noroff.no') == true &&
    checkLength(password, 8, 'Password', passwordLabel) == true
  ) {
    loginUser(
      LOGIN_URL,
      errorCon,
      email.value.trim(),
      password.value.trim(),
      h1,
    );
  } else {
    password.addEventListener('keyup', () => {
      checkLength(password, 8, 'Password', passwordLabel, 'text-white');
    });
    email.addEventListener('keyup', () => {
      regexCheck(email, 'Email', emailLabel, '@stud.noroff.no');
    });
  }
});
