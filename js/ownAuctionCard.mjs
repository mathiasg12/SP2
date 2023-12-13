import { improvedTimeFormat } from './timeFormat.mjs';
import { getLeadingBid } from './findLeadingBid.mjs';
import { adjustTitle } from './auctionCard.mjs';
/**
 * function that makes a new Date of the current time then takes the endsAt date if the value of endsAt-currentTime is less than 0 the function returns false
 * because it means the auction has ended, if the value is greater than 0 it returns true because it means the auction is on going
 * @param {object} object
 * @returns boolean
 */
function checkIfAuctionIsSold(object) {
  let currentDate = new Date();
  if (new Date(object.endsAt) - currentDate < 0) {
    return false;
  } else {
    return true;
  }
}
/**
 * funnction that uses an object to make HTML and appends it to the own auction section on the profile page this allows for a delete button to be added
 * @param {object} object
 * @param {string} section
 */
function createHTMLOwnAuctions(object, section) {
  let { description, endsAt, media, title, bids, id } = object;
  let highestBid = document.createElement('p');
  let divBid = document.createElement('div');
  let divEnd = document.createElement('div');
  let card = document.createElement('div');
  let clickAbleSection = document.createElement('a');
  let imgCon = document.createElement('div');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let endDate = document.createElement('p');
  let newEndsAt = improvedTimeFormat(endsAt);
  img.src = media;
  h3.innerText = adjustTitle(title);
  /**
   * eventlistener that adds a default image if the image recived can not be loaded or a image is not recived that all
   */
  img.addEventListener('error', () => {
    img.src = './pictures/error.jpg';
  });
  endDate.innerText = 'Ends at:' + ' ' + newEndsAt;
  highestBid.innerText = getLeadingBid(bids);
  divEnd.append(endDate);
  divBid.append(highestBid);
  imgCon.append(img);
  clickAbleSection.append(imgCon, h3, divBid, divEnd);
  card.append(clickAbleSection);
  clickAbleSection.href = 'auctionSpecific.html?id=' + id;
  section.append(card);
  img.classList.add('img-fluid');
  img.alt = 'auction picture';
  card.classList.add(
    'd-flex',
    'align-items-center',
    'flex-column',
    'bg-black',
    'p-2',
    'my-4',
    'mx-md-4',
    'ownAuctionCard',
    'rounded',
    'text-white',
    'text-center',
  );
  clickAbleSection.classList.add('text-decoration-none', 'clickAbleSection');
  h3.classList.add('my-3', 'fs-4', 'text-white');
  endDate.classList.add('text-golden', 'text-center', 'p-1', 'mt-2', 'mb-2');
  highestBid.classList.add('text-lightGolden', 'mb-2', 'text-center', 'mt-2');
  divEnd.classList.add('insideBorders', 'w-100');
  divBid.classList.add('insideBorders', 'w-100');
  if (object.seller.name === localStorage.getItem('name')) {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete Auction';
    deleteBtn.classList.add(
      'py-1',
      'my-2',
      'bg-danger',
      'text-white',
      'rounded-pill',
      'deletebtn',
    );
    if (checkIfAuctionIsSold(object) === true) {
      card.append(deleteBtn);
    } else {
      let soldSection = document.createElement('p');
      soldSection.classList.add('text-lime');
      soldSection.innerText = `this Auction has ended!`;
      clickAbleSection.append(soldSection);
    }
  }
}
export { createHTMLOwnAuctions };
