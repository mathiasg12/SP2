/**
 * fuction that deletes the token stored in local storage and redirects the user to the landing page
 */
function logOut() {
  localStorage.clear();
  location.replace('index.html');
}
export { logOut };
