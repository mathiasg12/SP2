import { getProfilInfo } from './getProfile.mjs';
/**
 * function that sends a get request to the api that returns a profile object, the function then stores the profile information in a variable, the function also displays some information,
 * like name,email and credit
 * @param {string} nameEl
 * @param {string} emailEl
 * @param {string} creditsEL
 * @param {string} profileImg
 */
async function dispalyUserInfo(nameEl, emailEl, creditsEL, profileImg, con) {
  let user = await getProfilInfo(con);
  let { email, name, credits, avatar } = user;
  let userName = document.createElement('p');
  let userEmail = document.createElement('p');
  let userCredit = document.createElement('p');
  userName.innerText += name;
  userEmail.innerText += email;
  userEmail.classList.add('text-break', 'fs-5');
  userName.classList.add('text-break', 'fs-5');
  userCredit.classList.add('text-break', 'fs-5', 'text-lime');
  userCredit.innerText += credits;
  nameEl.append(userName);
  emailEl.append(userEmail);
  creditsEL.append(userCredit);
  if (avatar.length != 0) {
    profileImg.src = avatar;
  }
}
export { dispalyUserInfo };
