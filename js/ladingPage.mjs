import { createHTMLFromObject } from './auctionCard.mjs';
import { AUCTION_URL } from './variables.mjs';
import { displayFromArray } from './displayFromArray.mjs';
let auctionSection = document.querySelector('.recently-container');
let url = AUCTION_URL + '?_active=true&limit=10';
displayFromArray(url, createHTMLFromObject, auctionSection);
