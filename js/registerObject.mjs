/**
 * function that creates an object from four parameters from user input
 * @param {string} name
 * @param {string} email
 * @param {string} passwword
 * @param {string} avatar
 * @returns
 */
function createUserObject(name, email, passwword, avatar) {
  return {
    name: name,
    email: email,
    password: passwword,
    avatar: avatar,
  };
}
export { createUserObject };
