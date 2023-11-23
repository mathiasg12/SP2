import { logOut } from './Logout.mjs';
const logOutBtn = document.querySelector('.logOutBtn ');
logOutBtn.addEventListener('click', () => {
  logOut();
});
