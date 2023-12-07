import { orderedBids } from './sortHighestBid.mjs';
/**
 * function that takes the last object in an arrray (leading bid) and returns that object
 * @param {array} bids
 * @returns {object}
 */
function getLeadingBid(bids) {
  let newList = orderedBids(bids);
  let bidsLength = newList.length;
  let bidsIndexNr = 0;
  if (bidsLength >= 1) {
    return `Leading bid: ${bids[bidsIndexNr].amount} Credit`;
  } else {
    return 'No bids yet';
  }
}
export { getLeadingBid };
