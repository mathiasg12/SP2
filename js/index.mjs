import { logOut } from './Logout.mjs';

//Index.mjs contain functions that is used on all pages
const haburgerMenuIcon = document.getElementById('haburgerMenuIcon');
const hiddenMenu = document.getElementById('hiddenMenu');
const credit = document.getElementById('credit');
const logOutHeader = document.getElementById('logOutHeader');
const login = document.getElementById('login');
const signUpHeader = document.getElementById('signUpHeader');
const creditLi = document.getElementById('creditLi');
/**
 * simple addeventlitener that toggles between a class called "hamburger-menu" which toggles display between "block" and "none"
 */
haburgerMenuIcon.addEventListener('click', () => {
  hiddenMenu.classList.toggle('hamburger-menu');
});
/**
 * addeventlistener that runs if a new page is about to load, then it checks if the page is profile.html it will then send not logged in users to login page
 */
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('BidHouseToken') == null) {
    if (location.href.includes('/profile.html')) {
      location.replace('/login.html');
    }
  }
});
/**
 * event listener that runs when the page is loaded it add or removes items from the header depending if the user is logged in
 * @example
 * //user is logged in
 * it the removes login and signup from header
 * and adds credit and logout button
 * //user is not logged in
 * it then removes logout button and credit
 * and adds signup and login link
 */
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('BidHouseToken') != null) {
    credit.classList.remove('d-none');
    creditLi.classList.remove('d-none');
    logOutHeader.classList.remove('d-none');
    if (login.classList.contains('d-none') == false) {
      login.classList.add('d-none');
    }
    if (signUpHeader.classList.contains('d-none') == false) {
      signUpHeader.classList.add('d-none');
    }
  } else {
    if (credit.classList.contains('d-none') == false) {
      credit.classList.add('d-none');
    }
    if (logOutHeader.classList.contains('d-none') == false) {
      logOutHeader.classList.add('d-none');
    }
    signUpHeader.classList.remove('d-none');
    login.classList.remove('d-none');
  }
});
/**
 * event listener that runs if logout button in the header is clicked it then runs a function called logOut which clears local storage and directs to landing page
 */
logOutHeader.addEventListener('click', () => {
  logOut();
});
