import { createUserObject } from './registerObject.mjs';
import { loginUser } from './loginFunction.mjs';
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
async function regiterUser(
  url,
  loginUrl,
  errorCon,
  name,
  email,
  password,
  avatar,
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
      errorCon.classList.add('text-white');
      console.log(responseJson);
      await loginUser(loginUrl, errorCon, email, password);
    } else {
      errorCon.innerText = responseJson.errors[0].message;
      errorCon.classList.add('text-danger');
      errorCon.scrollIntoView({ behavior: 'smooth' });
    }
  } catch (error) {
    console.log(error);
  }
}
export { regiterUser };
