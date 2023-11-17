const haburgerMenuIcon = document.getElementById('haburgerMenuIcon');
const hiddenMenu = document.getElementById('hiddenMenu');
/**
 * simple addeventlitener that toggles between a class called "hamburger-menu" which toggles display between "block" and "none"
 */
haburgerMenuIcon.addEventListener('click', () => {
  hiddenMenu.classList.toggle('hamburger-menu');
});
