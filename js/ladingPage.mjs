import { renderCarousell } from './renderCarousell.mjs';
import { AUCTION_URL } from './variables.mjs';
let auctionSection = document.querySelector('.recently-container');
let recentlyLoader = document.querySelector('.loaderRecently');
let endingSoonLoader = document.querySelector('.loaderEndingSoon');
let endingSoonCon = document.querySelector('.endingSoon-container');
renderCarousell(
  auctionSection,
  recentlyLoader,
  AUCTION_URL + '?_active=true&_bids=true&limit=12&sort=created',
  'arrowBack',
  'arrowNext',
);
renderCarousell(
  endingSoonCon,
  endingSoonLoader,
  AUCTION_URL + '?_active=true&_bids=true&limit=12&sort=endsAt&sortOrder=asc',
  'arrowBackEndingSoon',
  'arrowNextEndingSoon',
);
