/**
 * function that takes the last object in an arrray (leading bid) and rturns that object
 * @param {array} bids
 * @returns {object}
 */
function getLeadingBid(bids) {
  let bidsLength = bids.length;
  let bidsIndexNr = bidsLength - 1;
  if (bidsLength >= 1) {
    return `Current leading bid: ${bids[bidsIndexNr].amount}`;
  } else {
    return 'No bids yet';
  }
}
export { getLeadingBid };
