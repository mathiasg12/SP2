import { createHTMLFromObject } from './auctionCard.mjs';
import { AUCTION_URL } from './variables.mjs';
import { displayFromArray } from './displayFromArray.mjs';
let auctionSection = document.querySelector('.recently-container');
let url = AUCTION_URL + '?_active=true&_bids=true&limit=10&sort=created';
displayFromArray(url, createHTMLFromObject, auctionSection);
