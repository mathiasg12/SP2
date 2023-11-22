import { regiterUser } from './SignUpFunction.mjs';
import { REGISTER_URL, LOGIN_URL } from './variables.mjs';
import { regexCheck, isEqual, checkLength } from './validation.mjs';
const name = document.getElementById('name');
const nameLabel = document.getElementById('nameLabel');
const email = document.getElementById('email');
const emailLabel = document.getElementById('emailLabel');
const password = document.getElementById('password');
const passwordLabel = document.getElementById('passwordLabel');
const repeatPassword = document.getElementById('repassword');
const repeatPasswordLabel = document.getElementById('repeatPasswordLabel');
const avatarLink = document.getElementById('avatar');
const avatarLinkLabel = document.getElementById('avatarLabel');
const sigupBtn = document.getElementById('submit');
const infoText = document.querySelector('.infoText');
sigupBtn.addEventListener('click', (click) => {
  click.preventDefault();
  regexCheck(email, 'Email', emailLabel, '@stud.noroff.no');
  isEqual(password, repeatPassword, repeatPasswordLabel, 'Reapeat Password');
  checkLength(password, 8, 'Password', passwordLabel);
  checkLength(name, 1, 'Name', nameLabel);
  if (
    regexCheck(email, 'Email', emailLabel, '@stud.noroff.no') == true &&
    isEqual(
      password,
      repeatPassword,
      repeatPasswordLabel,
      'Reapeat Password',
    ) == true &&
    checkLength(password, 8, 'Password', passwordLabel) == true &&
    checkLength(name, 1, 'Name', nameLabel) == true
  ) {
    regiterUser(
      REGISTER_URL,
      LOGIN_URL,
      infoText,
      name.value.trim(),
      email.value.trim(),
      password.value.trim(),
      avatarLink.value.trim(),
    );
  } else {
    name.addEventListener('keyup', () => {
      checkLength(name, 1, 'Name', nameLabel);
    });
    repeatPassword.addEventListener('keyup', () => {
      isEqual(
        password,
        repeatPassword,
        repeatPasswordLabel,
        'Reapeat Password',
      );
    });
    password.addEventListener('keyup', () => {
      checkLength(password, 8, 'Password', passwordLabel);
    });
    email.addEventListener('keyup', () => {
      regexCheck(email, 'Email', emailLabel, '@stud.noroff.no');
    });
  }
});
