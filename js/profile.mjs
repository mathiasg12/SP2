import { logOut } from './Logout.mjs';
const logOutBtn = document.querySelector('.logOutBtn ');
/**
 * eventlistener that rund when the user presses logOut it then runs the logOut fuction
 */
logOutBtn.addEventListener('click', () => {
  logOut();
});
