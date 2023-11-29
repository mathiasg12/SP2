import { displayFromArray } from './displayFromArray.mjs';
import { createHTMLFromObject } from './auctionCard.mjs';
import { AUCTION_URL } from './variables.mjs';
import { searchForAuction } from './searchFunctionality.mjs';
import { getAllAuctions } from './getAuctions.mjs';
const searchKey = document.getElementById('searchKey');
const searchInput = document.getElementById('searchBar');
const con = document.querySelector('.cardCon');
const moreBtn = document.getElementById('moreBtn');
const loader = document.querySelector('.loader');
let parameters = `?_active=true&_bids=true&limit=${20}&&offset=${0}`;
let page = 0;
let searched = false;
displayFromArray(AUCTION_URL + parameters, createHTMLFromObject, con);
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchKey.click();
  }
});
/**
 * eventlistener that runs if the more button is clicked, it then fetches and displays the next 20 auctions in the api
 */
moreBtn.addEventListener('click', () => {
  page++;
  let limit = 20;
  let offSet = page * limit;
  let newParameters = `?_active=true&_bids=true&limit=${limit}&&offset=${offSet}`;
  displayFromArray(AUCTION_URL + newParameters, createHTMLFromObject, con);
});
/**
 * eventlistener that runs if the search symbol is pressed it then uses getAllAuctions to create an array with all Auctions and then uses the searchForAuction to search for matches
 * between the search input and the title or the descriptions of an auction, if no matches is found the user recives a message if there are matches they are displayed on the page,
 */
searchKey.addEventListener('click', async () => {
  con.innerHTML = '';
  searchInput.disabled = true;
  searchKey.disabled = true;
  if (searchInput.value.toLowerCase().trim().length < 1) {
    location.reload();
  } else {
    searched = true;
    loader.classList.remove('d-none');
    page = 0;
    let allAuctions = await getAllAuctions(AUCTION_URL);
    let arraySearchedAuctions = searchForAuction(allAuctions, searchInput);
    let p = document.createElement('p');
    p.classList.add('text-center', 'w-100');
    con.append(p);
    if (arraySearchedAuctions.length < 1) {
      p.innerText = `Sorry no mathces were found on your search for: ${searchInput.value
        .toLowerCase()
        .trim()}`;
      loader.classList.add('d-none');
      searchInput.disabled = false;
      searchKey.disabled = false;
    } else {
      arraySearchedAuctions.forEach((auctions) => {
        p.innerText = `${
          arraySearchedAuctions.length
        } matches for your search: ${searchInput.value.toLowerCase().trim()}`;
        createHTMLFromObject(auctions, con);
        loader.classList.add('d-none');
        moreBtn.disabled = 'true';
        searchInput.disabled = false;
        searchKey.disabled = false;
      });
    }
  }
});
