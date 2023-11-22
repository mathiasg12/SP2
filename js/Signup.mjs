import { regiterUser } from './SignUpFunction.mjs';
import { REGISTER_URL } from './variables.mjs';
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const avatarLink = document.getElementById('avatar');
const sigupBtn = document.getElementById('submit');
const infoText = document.querySelector('.infoText');
sigupBtn.addEventListener('click', (click) => {
  click.preventDefault();
  regiterUser(
    REGISTER_URL,
    infoText,
    name.value.trim(),
    email.value.trim(),
    password.value.trim(),
    avatarLink.value.trim(),
  );
});
