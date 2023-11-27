import { auctionObject } from './auctionSpecific.mjs';
import { getCredit } from './getProfile.mjs';
import { bidOnItem } from './postBid.mjs';
import { idParameter } from './auctionSpecific.mjs';
import { AUCTION_URL } from './variables.mjs';
import { orderedBids } from './sortHighestBid.mjs';
/**
 * function that creates a form and places it in a section
 * @param {string} section
 */
function createBidForm(section) {
  let bidForm = document.createElement('form');
  let bidinput = document.createElement('input');
  let bidLabel = document.createElement('label');
  let bidInfo = document.createElement('p');
  let bidCta = document.createElement('input');
  let newBidArray = orderedBids(auctionObject.bids);
  if (localStorage.getItem('name') == newBidArray[0].bidderName) {
    bidInfo.classList.add('text-lime');
    bidInfo.innerText = 'You are currently leading this bid round!';
  } else {
    bidInfo.innerText = 'Place a bid (min 1 above current price)';
  }
  bidinput.type = 'number';
  bidinput.name = 'bid';
  bidLabel.innerText = 'place bid';
  bidCta.value = 'Place Bid';
  bidCta.id = 'bid';
  bidinput.id = 'bidInput';
  bidCta.type = 'submit';
  bidInfo.id = 'bidInfo';
  bidInfo.classList.add('my-3');
  bidForm.classList.add(
    'd-flex',
    'flex-column',
    'align-items-center',
    'p-4',
    'text-center',
  );
  bidCta.classList.add('my-3', 'ctaCustomHeight', 'rounded-pill');
  bidinput.classList.add('rounded', 'my-3');
  bidinput.append(bidLabel);
  bidForm.append(bidInfo, bidinput, bidCta);
  section.append(bidForm);
}
/**
 * async fuction that handle when a user clicks on the bid now button it then creates a small form and validates that the user input (bid) is higher than than the current
 * leading bid and smaller than the users credit. it adds and remove classes depending on if the user inputs are invalid or valid data, if the validation is approved it will run
 * the bidOnItem function which sends the bid to the api
 * @param {input} click
 */
async function handleClickBid(click) {
  if (click.target.id == 'bid') {
    click.preventDefault();
    let bidInput = document.getElementById('bidInput');
    let bidValue = bidInput.value;
    let bidValueNumber = +bidValue;
    let newBidArray = orderedBids(auctionObject.bids);
    let highestBid = newBidArray[0];
    let highestBidValue = highestBid.amount;
    let bidInfo = document.getElementById('bidInfo');
    const credit = await getCredit();
    if (bidValueNumber <= highestBidValue) {
      bidInfo.classList.add('text-danger');
      bidInput.classList.add('border-danger');
      bidInfo.innerText = `your bid of ${bidValueNumber} needs to be higher than the previous highest bid of ${highestBidValue}`;
    } else if (credit < bidValueNumber) {
      bidInfo.classList.add('text-danger');
      bidInput.classList.add('border-danger');
      bidInfo.innerText = `your bid of ${bidValueNumber} needs to be higher or exactly your credit balance of ${credit}`;
    } else {
      bidInfo.classList.remove('text-danger');
      bidInput.classList.remove('border-danger');
      bidInfo.innerText = `'Place a bid (min 1 above current price)'`;
      await bidOnItem(
        AUCTION_URL + '/' + idParameter + '/bids',
        bidValueNumber,
        bidInfo,
      );
    }
  }
}
/**
 * eventlisener that runs the  handleClickBid(click) function if a user clicks something
 */
window.addEventListener('click', (click) => {
  handleClickBid(click);
});
export { createBidForm };
