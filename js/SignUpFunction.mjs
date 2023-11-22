import { createUserObject } from './registerObject.mjs';
/**
 * Function that register a user to the API
 * @param {string} url
 * @param {string} name
 * @param {string} email
 * @param {string} passwword
 * @param {string} avatar
 * @example
 * registerUser("example.api/register",example,abc1234,example@noroff.no,avatar)
 */
async function regiterUser(url, errorCon, name, email, passwword, avatar) {
  try {
    const sendUser = {
      method: 'post',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(createUserObject(name, email, passwword, avatar)),
    };
    let response = await fetch(url, sendUser);
    let responseJson = await response.json();
    if (response.status !== 400) {
      errorCon.innerText = 'Create a free Account';
      errorCon.classList.add('text-white');
      console.log(responseJson);
    } else {
      errorCon.innerText = responseJson.errors[0].message;
      errorCon.classList.add('text-danger');
    }
  } catch (error) {
    console.log(error);
  }
}
export { regiterUser };
