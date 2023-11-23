function logOut() {
  localStorage.clear();
  location.replace('index.html');
}
export { logOut };
