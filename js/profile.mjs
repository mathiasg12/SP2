import { logOut } from './Logout.mjs';
import { dispalyUserInfo } from './dispalyUserInfo.mjs';
import { getProfilInfo } from './getProfile.mjs';
import { createUpdateSection } from './updateAvatarSection.mjs';
import { updateAvatar } from './updateAvatar.mjs';
import { PROFILE_URL } from './variables.mjs';
const logOutBtn = document.querySelector('.logOutBtn ');
const name = document.getElementById('name');
const email = document.getElementById('email');
const credit = document.getElementById('creditProfile');
const avatar = document.getElementById('profileImg');
const changeAvatar = document.querySelector('.changeAvatarBtn');
const changeAvatarCon = document.querySelector('.changeAvatarBtnCon ');
let User =
  /**
   * eventlistener that rund when the user presses logOut it then runs the logOut fuction
   */
  logOutBtn.addEventListener('click', () => {
    logOut();
  });
dispalyUserInfo(name, email, credit, avatar);
changeAvatar.addEventListener('click', () => {
  changeAvatar.classList.add('d-none');
  createUpdateSection(changeAvatarCon);
});
window.addEventListener('click', async (click) => {
  if (click.target.id == 'cancel') {
    document.getElementById('updateSection').classList.add('d-none');
    changeAvatar.classList.remove('d-none');
  } else if (click.target.id == 'update') {
    let inputUrl = document.getElementById('newUrl');
    let newURL = inputUrl.value.trim();
    let user = await getProfilInfo();
    let urlInfo = document.getElementById('urlInfo');
    if (newURL.length >= 5) {
      updateAvatar(
        PROFILE_URL + user.name + '/media',
        newURL,
        urlInfo,
        inputUrl,
      );
    } else {
      inputUrl.classList.add('border-danger');
      urlInfo.innerText = 'Please enter a valid URl';
      urlInfo.classList.add('text-danger');
    }
  }
});
