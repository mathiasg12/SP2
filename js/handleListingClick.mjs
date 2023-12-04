import { dateRegex, checkLength } from './validation.mjs';
import { convertToIso, improvedTimeFormat } from './timeFormat.mjs';
import { createListingObject } from './createListingObject.mjs';
import { AUCTION_URL, PROFILE_URL } from './variables.mjs';
import { postListing } from './postListing.mjs';
import { createHTMLFromObject } from './auctionCard.mjs';
import { displayFromOwnAuctions } from './displayUserOwnAuctions.mjs';
/**
 * function that handles the click event when a user clicks create listing. the function uses validation functions that checks the user input,
 * if the validation passes the function calls the function post listing that sends the lisiting to the api
 * @param {string} title
 * @param {string} titleLabel
 * @param {string} desc
 * @param {string} descLabel
 * @param {string} endDate
 * @param {string} endDateLabel
 * @param {array} mediaArray
 * @param {string} form
 * @param {string} addedImgCon
 */
async function handleListingClick(
  title,
  titleLabel,
  desc,
  descLabel,
  endDate,
  endDateLabel,
  mediaArray,
  form,
  addedImgCon,
  myAuctionCon,
) {
  checkLength(title, 2, 'Title', titleLabel, 'text-black');
  checkLength(desc, 5, 'Description', descLabel, 'text-black');
  dateRegex(endDate, 'End Date', endDateLabel, 'DD/MM/YYYY');
  if (
    checkLength(title, 2, 'Title', titleLabel, 'text-black') == true &&
    checkLength(desc, 5, 'Description', descLabel, 'text-black') === true &&
    dateRegex(endDate, 'End Date', endDateLabel, 'DD/MM/YYYY') == true
  ) {
    await postListing(
      AUCTION_URL,
      createListingObject(
        title.value.trim(),
        desc.value.trim(),
        mediaArray,
        convertToIso(endDate.value.trim()),
      ),
      form,
      mediaArray,
      addedImgCon,
    );
    myAuctionCon.innerText = ' ';
    await displayFromOwnAuctions(
      PROFILE_URL + `${localStorage.getItem('name')}/listings?_bids=true`,
      createHTMLFromObject,
      myAuctionCon,
    );
  } else {
    title.addEventListener('keyup', () => {
      checkLength(title, 2, 'Title', titleLabel, 'text-black');
    });
    desc.addEventListener('keyup', () => {
      checkLength(desc, 5, 'Description', descLabel, 'text-black');
    });
    endDate.addEventListener('keyup', () => {
      dateRegex(endDate, 'End Date', endDateLabel, 'DD/MM/YYYY');
    });
  }
}
export { handleListingClick };
