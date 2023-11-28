import { displayFromArray } from './displayFromArray.mjs';
import { createHTMLFromObject } from './auctionCard.mjs';
import { AUCTION_URL } from './variables.mjs';
const con = document.querySelector('.cardCon');
const limit = 20;
const parameters = `?_active=true&_bids=true&limit=${limit}`;
displayFromArray(AUCTION_URL + parameters, createHTMLFromObject, con);
