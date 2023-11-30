import { logOut } from './Logout.mjs';
import { dispalyUserInfo } from './dispalyUserInfo.mjs';
import { getProfilInfo } from './getProfile.mjs';
import { createUpdateSection } from './updateAvatarSection.mjs';
import { updateAvatar } from './updateAvatar.mjs';
import { PROFILE_URL } from './variables.mjs';
import { handleListingClick } from './handleListingClick.mjs';
const logOutBtn = document.querySelector('.logOutBtn ');
const name = document.getElementById('name');
const email = document.getElementById('email');
const credit = document.getElementById('creditProfile');
const avatar = document.getElementById('profileImg');
const changeAvatar = document.querySelector('.changeAvatarBtn');
const changeAvatarCon = document.querySelector('.changeAvatarBtnCon ');
const addBtn = document.getElementById('addBtn');
const imgLink = document.getElementById('imgLink');
const imgLinkLabel = document.getElementById('imgLinkLabel');
const imgLabelCon = document.getElementById('imgLabelCon');
const endDate = document.getElementById('endD');
const endDateLabel = document.getElementById('endDLabel');
const desc = document.getElementById('desc');
const title = document.getElementById('title');
const descLabel = document.getElementById('descLabel');
const titleLabel = document.getElementById('titleLabel');
const listingCta = document.getElementById('listingCta');
const form = document.querySelector('.listingForm');
imgLabelCon;
let arrayOfImages = [];
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
addBtn.addEventListener('click', (click) => {
  click.preventDefault();
  if (imgLink.value.trim().length > 5) {
    let newImage = imgLink.value.trim();
    arrayOfImages.push(newImage);
    let newImageText = document.createElement('p');
    newImageText.id = 'addedImage';
    newImageText.classList.add('text-darkGreen', 'm-3');
    newImageText.innerText = newImage;
    imgLabelCon.append(newImageText);
    imgLinkLabel.innerText = 'Added pictures(click to remove):';
    imgLink.value = '';
    console.log(arrayOfImages);
  } else {
    imgLinkLabel.innerText = 'Please add a valid image link';
  }
});
listingCta.addEventListener('click', (click) => {
  click.preventDefault();
  handleListingClick(
    title,
    titleLabel,
    desc,
    descLabel,
    endDate,
    endDateLabel,
    arrayOfImages,
  );
});
