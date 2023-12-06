import { AUCTION_URL } from './variables.mjs';
import { getAuctions } from './getAuctions.mjs';
import { createHTMLSpecific } from './displaySpecific.mjs';
let searchForId = document.location.search;
let findNewParameter = new URLSearchParams(searchForId);
let idParameter = findNewParameter.get('id');
let urlWithId = AUCTION_URL + '/' + idParameter + '?_bids=true&_seller=true';
let auctionObject = await getAuctions(urlWithId);
let title = document.querySelector('title');
let loader = document.querySelector('.loaderspecific');
/**
 * function that creates a title for the page
 */
function createTitle() {
  if (auctionObject.title.length >= 1) {
    title.innerText = auctionObject.title;
  } else {
    title.innerText = 'bid house auction';
  }
}
createTitle();
const specificCon = document.getElementById('specificCon');
createHTMLSpecific(auctionObject, specificCon, loader);
export { auctionObject, idParameter };
