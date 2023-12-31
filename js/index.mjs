//Index.mjs contain functions that is used on all pages
import { logOut } from './Logout.mjs';
import { getProfilInfo } from './getProfile.mjs';
const haburgerMenuIcon = document.getElementById('haburgerMenuIcon');
const hiddenMenu = document.getElementById('hiddenMenu');
const credit = document.getElementById('credit');
const logOutHeader = document.getElementById('logOutHeader');
const login = document.getElementById('login');
const signUpHeader = document.getElementById('signUpHeader');
const creditLi = document.getElementById('creditLi');
const profileHeader = document.querySelector('.profileHide');
const profileFooter = document.querySelector('.profileHideFooter');
const sellItemFooter = document.querySelector('.sellItemFooter');
const nav = document.querySelector('nav');
/**
 * simple addeventlitener that toggles between a class called "hamburger-menu" which toggles display between "block" and "none"
 */
haburgerMenuIcon.addEventListener('click', () => {
  hiddenMenu.classList.toggle('hamburger-menu');
});
/**
 * event listener that runs when the page is loaded it add or removes items from the header depending if the user is logged in
 * @example
 * //user is logged in
 * it then removes login and signup from header
 * and adds credit and logout button
 * //user is not logged in
 * it then removes logout button and credit
 * and adds signup and login link
 */
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('BidHouseToken') != null) {
    credit.classList.remove('d-none');
    creditLi.classList.remove('d-none');
    getProfilInfo(credit, creditLi);
    logOutHeader.classList.remove('d-none');
    profileHeader.classList.remove('d-none');
    profileFooter.classList.remove('d-none');
    sellItemFooter.classList.remove('d-none');
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
    if (profileHeader.classList.contains('d-none') == false) {
      profileHeader.classList.add('d-none');
    }
    if (profileFooter.classList.contains('d-none') == false) {
      profileFooter.classList.add('d-none');
    }
    if (sellItemFooter.classList.contains('d-none') == false) {
      sellItemFooter.classList.add('d-none');
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
/**
 * eventlistener that runs when the user scrolls down it then makes the header smaller for desktop
 */
window.addEventListener('scroll', () => {
  if (window.scrollY >= 80) {
    nav.classList.remove('flex-md-column');
    nav.classList.add('justify-content-between');
  } else {
    nav.classList.add('flex-md-column');
    nav.classList.remove('justify-content-between');
  }
});
