import { logOut } from './Logout.mjs';
import { dispalyUserInfo } from './dispalyUserInfo.mjs';
import { getProfilInfo } from './getProfile.mjs';
import { createUpdateSection } from './updateAvatarSection.mjs';
import { updateAvatar } from './updateAvatar.mjs';
import { AUCTION_URL, PROFILE_URL } from './variables.mjs';
import { handleListingClick } from './handleListingClick.mjs';
import { displayFromOwnAuctions } from './displayUserOwnAuctions.mjs';
import { createHTMLOwnAuctions } from './ownAuctionCard.mjs';
import { getUserBids } from './getUserBid.mjs';
import { deleteConfirme } from './DeleteFunctions.mjs';
import { deleteAuction } from './DeleteFunctions.mjs';
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
const ownAuctionsCon = document.querySelector('.myAuctionsCon');
const bidsMadeCon = document.querySelector('.myBidsCon');
const profileSection = document.querySelector('.profileSection');
const errorOrSuccessCon = document.querySelector('.errorOrSuccess');
imgLabelCon;
let arrayOfImages = [];
/**
 * eventlistener that runs when the user presses logOut, it then runs the logOut fuction
 */
logOutBtn.addEventListener('click', () => {
  logOut();
});
dispalyUserInfo(name, email, credit, avatar, profileSection);
displayFromOwnAuctions(
  PROFILE_URL +
    `${localStorage.getItem('name')}/listings?_bids=true&_seller=true`,
  createHTMLOwnAuctions,
  ownAuctionsCon,
);
getUserBids(bidsMadeCon);
/**
 * eventlistener that runs if the change avatar button is pressed, it then calls the createUpdateSection function
 */
changeAvatar.addEventListener('click', () => {
  changeAvatar.classList.add('d-none');
  createUpdateSection(changeAvatarCon);
});
/**
 * event listener that runs if eighter the update button or cancel button is clicked, if the update button is clicked the function checks the length of the url
 * if it is to short the user vil get an error message else the function calls the updateAvatar function, if the user clicks cancel the update section is removed
 */
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
      urlInfo.classList.remove('labelDanger');
      updateAvatar(
        PROFILE_URL + user.name + '/media',
        newURL,
        urlInfo,
        inputUrl,
      );
    } else {
      urlInfo.classList.add('labelDanger');
      inputUrl.classList.add('border-danger');
      urlInfo.innerText = 'Please enter a valid URl';
      urlInfo.classList.add('text-danger');
    }
  }
});
/**
 * event listener that runs if the add image button is pressed the function then adds the image url to the image array and then displays a shortened version to the user
 */
addBtn.addEventListener('click', (click) => {
  click.preventDefault();
  if (imgLink.value.trim().length > 5) {
    imgLink.classList.remove('border-danger');
    imgLinkLabel.classList.remove('text-danger');
    imgLinkLabel.classList.remove('labelDangerWhite');
    let newImage = imgLink.value.trim();
    arrayOfImages.push(newImage);
    let newImageText = document.createElement('p');
    newImageText.id = newImage;
    newImageText.dataset.clickId = 'imageClick';
    newImageText.classList.add('text-darkGreen', 'm-3', 'addedImage');
    newImageText.innerText = newImage.slice(0, 20);
    imgLabelCon.append(newImageText);
    imgLinkLabel.innerText = 'Added pictures(click to remove):';
    imgLink.value = '';
  } else {
    imgLinkLabel.innerText = 'Please add a valid image link(optional)';
    imgLinkLabel.classList.add('labelDangerWhite');
    imgLink.classList.add('border-danger');
    imgLinkLabel.classList.add('text-danger');
    imgLink.addEventListener('keyup', () => {
      if (imgLink.value.trim().length > 5 || imgLink.value.trim().length == 0) {
        imgLink.classList.remove('border-danger');
        imgLinkLabel.classList.remove('text-danger');
        imgLinkLabel.classList.remove('labelDangerWhite');
      }
    });
  }
});
/**
 * event listener that runs if the create listing button is pressed the function then scolls the user to the top of the form and deletes any validation messages in the form
 * to prevent duplication, the function then calls handleListingClick function
 */
listingCta.addEventListener('click', (click) => {
  click.preventDefault();
  logOutBtn.scrollIntoView();
  if (document.getElementById('messageCon') !== null) {
    form.removeChild(document.getElementById('messageCon'));
  }
  handleListingClick(
    title,
    titleLabel,
    desc,
    descLabel,
    endDate,
    endDateLabel,
    arrayOfImages,
    form,
    imgLabelCon,
    ownAuctionsCon,
  );
});
/**
 * event listener that runs if a user clicks a picture link in the form, it then targets the id of the clicked item and finds which index
 * that item is in the image array, it then removes it
 */
window.addEventListener('click', (click) => {
  if (click.target.dataset.clickId === 'imageClick') {
    let idToDelete = click.target.id;
    let indexDelete = arrayOfImages.indexOf(idToDelete);
    arrayOfImages.splice(indexDelete, 1);
    imgLabelCon.removeChild(document.getElementById(idToDelete));
    if (arrayOfImages.length < 1) {
      imgLinkLabel.innerText = 'Picture link (optional)';
    }
  }
});
/**
 * event listener that runs if a user edits the listing form, the function will then look for a item with id of messageCon if it exist it will remove it
 * this is to avoid duplicated error or success messages
 */
form.addEventListener('keydown', () => {
  if (document.getElementById('messageCon') !== null) {
    form.removeChild(document.getElementById('messageCon'));
  }
});
/**
 * eventlistener that listen to a click event if the element clicked has a attribute called deleteId that has the same value as the id of the target auction,
 * it then calls a function which makes a confirmation modal and if the user clicks the cancel button the modal closes and if they click the delete button the
 * function calls the deleteAuction function which sends an delete request to the api and the auction is deleted, if something goes wrong the user gets a message.
 */
window.addEventListener('click', (click) => {
  if (click.target.id === 'deleteBtn') {
    let deleteId = click.target.getAttribute('deleteId');
    let deleteBtn = document.querySelector(`[deleteId="${deleteId}"]`);
    deleteBtn.classList.add('d-none');
    let parentNode = deleteBtn.parentElement;
    deleteConfirme(parentNode);
    /**
     * this function handles the innerClick of the modal and is there to prevent that the auctions is duplicated, the function checks of the click belongs to the cancel button or the
     * delete button and removes the event if one of them is clicked to prevent duplication
     * @param {input} click
     */
    async function innerClick(click) {
      if (click.target.id === 'cancelDeletion') {
        window.removeEventListener('click', innerClick);
        let deleteModal = document.querySelector('.deleteModal');
        parentNode.removeChild(deleteModal);
        deleteBtn.classList.remove('d-none');
      } else if (click.target.id === 'deleteConfirme') {
        window.removeEventListener('click', innerClick);
        listingCta.scrollIntoView({ behavior: 'smooth' });
        await deleteAuction(
          AUCTION_URL + `/${deleteId}`,
          ownAuctionsCon,
          errorOrSuccessCon,
        );
        document.querySelector('.loaderMyAuction').classList.remove('d-none');
        await displayFromOwnAuctions(
          PROFILE_URL +
            `${localStorage.getItem('name')}/listings?_bids=true&_seller=true`,
          createHTMLOwnAuctions,
          ownAuctionsCon,
        );
      }
    }
    window.addEventListener('click', innerClick);
  }
});
