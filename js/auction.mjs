import { displayFromArray } from './displayFromArray.mjs';
import { createHTMLFromObject } from './auctionCard.mjs';
import { AUCTION_URL } from './variables.mjs';
import { handleSearchClick } from './handleSearch.mjs';
const searchKey = document.getElementById('searchKey');
const searchInput = document.getElementById('searchBar');
const con = document.querySelector('.cardCon');
const moreBtn = document.getElementById('moreBtn');
const loader = document.querySelector('.loader');
const sort = document.getElementById('sort');
const parameters = `?_active=true&_bids=true&limit=${20}&&offset=${0}&sort=created`;
const parametersAcending = `?_active=true&_bids=true&limit=${20}&&offset=${0}&sort=created&&sortOrder=asc`;
const ParametersEndsAt = `?_active=true&_bids=true&limit=${20}&&offset=${0}&sort=endsAt&sortOrder=asc`;
let page = 0;
let searched = false;
displayFromArray(AUCTION_URL + parameters, createHTMLFromObject, con);
/**
 * event listener which reads enter as a click event
 */
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchKey.click();
  }
});
/**
 * eventlistener that runs if the more button is clicked, it then fetches and displays the next 20 auctions in the api
 */
moreBtn.addEventListener('click', () => {
  loader.classList.remove('d-none');
  page++;
  let limit = 20;
  let offSet = page * limit;
  if (sort.value === 'oldest') {
    let newParametersAcending = `?_active=true&_bids=true&limit=${limit}&&offset=${offSet}&sort=created&&sortOrder=asc`;
    displayFromArray(
      AUCTION_URL + newParametersAcending,
      createHTMLFromObject,
      con,
    );
  } else if (sort.value === 'endsAt') {
    let newParametersEndsAt = `?_active=true&_bids=true&limit=${limit}&&offset=${offSet}&sort=endsAt&sortOrder=asc`;
    displayFromArray(
      AUCTION_URL + newParametersEndsAt,
      createHTMLFromObject,
      con,
    );
  } else {
    let newParameters = `?_active=true&_bids=true&limit=${limit}&&offset=${offSet}&sort=created`;
    displayFromArray(AUCTION_URL + newParameters, createHTMLFromObject, con);
  }
});
/**
 * event listener that runs when the search icon is clicked, it then runs the handleSearch function and sets the global variable searched as true
 */
searchKey.addEventListener('click', () => {
  handleSearchClick(con, loader, searchInput, searchKey, moreBtn, AUCTION_URL);
  searched = true;
});
/**
 * event listener that runs when select value changes and displays the results in acsending order if the value is "oldest" and reload the page if the value is "newest",
 * the function behaves differetly if sorting search results and will then reverse the search array if the value is "oldest"
 */
sort.addEventListener('change', () => {
  if (searched === false) {
    if (sort.value === 'oldest') {
      con.innerText = '';
      displayFromArray(
        AUCTION_URL + parametersAcending,
        createHTMLFromObject,
        con,
      );
    } else if (sort.value === 'endsAt') {
      con.innerText = '';
      displayFromArray(
        AUCTION_URL + ParametersEndsAt,
        createHTMLFromObject,
        con,
      );
    } else {
      location.reload();
    }
  } else {
    handleSearchClick(
      con,
      loader,
      searchInput,
      searchKey,
      moreBtn,
      AUCTION_URL,
    );
  }
});
