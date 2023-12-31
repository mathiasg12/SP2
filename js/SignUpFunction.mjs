import { createUserObject } from './registerObject.mjs';
import { loginUser } from './loginFunction.mjs';
/**
 * Function that register a user to the API if the signup is successful the login fuction will run and the user automatically logs in, if the request is denied the user
 * will recive an error message
 * @param {string} url
 * @param {string} name
 * @param {string} email
 * @param {string} passwword
 * @param {string} avatar
 * @example
 * registerUser("example.api/register",example,abc1234,example@noroff.no,avatar)
 */
async function regiterUser(
  url,
  loginUrl,
  errorCon,
  name,
  email,
  password,
  avatar,
  header,
) {
  try {
    const sendUser = {
      method: 'post',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(createUserObject(name, email, password, avatar)),
    };
    let response = await fetch(url, sendUser);
    let responseJson = await response.json();
    if (response.status !== 400) {
      errorCon.innerText = 'Create a free Account';
      errorCon.classList.remove('apiError');
      await loginUser(loginUrl, errorCon, email, password);
    } else {
      errorCon.innerText = responseJson.errors[0].message;
      errorCon.classList.add('apiError');
      document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' });
    }
  } catch (error) {
    console.log(error);
    errorCon.innerText = `sorry something went wrong, ${error}`;
    errorCon.classList.add('apiError');
    document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' });
  }
}
export { regiterUser };
