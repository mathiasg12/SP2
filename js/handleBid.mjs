import { getCredit } from './getProfile.mjs';
import { bidOnItem } from './postBid.mjs';
import { idParameter, auctionObject } from './auctionSpecific.mjs';
import { AUCTION_URL } from './variables.mjs';
import { orderedBids } from './sortHighestBid.mjs';
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
      bidInfo.classList.remove('text-lime');
      bidInput.classList.add('border-danger');
      bidInfo.innerText = `your bid of ${bidValueNumber} needs to be higher than the previous highest bid of ${highestBidValue}`;
    } else if (credit < bidValueNumber) {
      bidInfo.classList.remove('text-lime');
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
export { handleClickBid };
