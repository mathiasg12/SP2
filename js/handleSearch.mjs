import { searchForAuction } from './searchFunctionality.mjs';
import { getAllAuctions } from './getAuctions.mjs';
import { createHTMLFromObject } from './auctionCard.mjs';
import { sortArray } from './sortByEndingSoon.mjs';
/**
 * eventlistener that runs if the search symbol is pressed it then uses getAllAuctions to create an array with all Auctions and then uses the searchForAuction to search for matches
 * between the search input and the title or the descriptions of an auction, if no matches is found the user recives a message if there are matches they are displayed on the page,
 * the function also adds a class to the search symbol making it unclickable while loading so a user cant spam click search until the page breaks and the user is blocked from the api
 * the function also handles sort functionality to searched items it will then reverse the array if the sort is set to oldest first and if the sort value is endsAt it will run the function
 * sortArray that will sort the auctions from the auction that is ending soonest to the one that is ending latest
 * @param {string} con section where objects are displayed
 * @param {string} loader loadig symbol
 * @param {string} searchInput search value from user input
 * @param {string} searchKey search icon or enter
 * @param {string} moreBtn more button
 * @param {string} url
 */
async function handleSearchClick(
  con,
  loader,
  searchInput,
  searchKey,
  moreBtn,
  url,
) {
  searchKey.classList.add('unClickAble');
  con.innerText = '';
  searchInput.disabled = true;
  if (searchInput.value.toLowerCase().trim().length < 1) {
    location.reload();
  } else {
    loader.classList.remove('d-none');
    let allAuctions = await getAllAuctions(url);
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
    } else {
      if (sort.value === 'newest') {
        arraySearchedAuctions.forEach((auctions) => {
          p.innerText = `${
            arraySearchedAuctions.length
          } matches for your search: ${searchInput.value.toLowerCase().trim()}`;
          createHTMLFromObject(auctions, con);
          loader.classList.add('d-none');
          moreBtn.disabled = 'true';
          searchInput.disabled = false;
          searchKey.classList.remove('unClickAble');
        });
      } else if (sort.value === 'endsAt') {
        let endsAtArray = sortArray(arraySearchedAuctions);
        endsAtArray.forEach((auctions) => {
          p.innerText = `${
            arraySearchedAuctions.length
          } matches for your search: ${searchInput.value.toLowerCase().trim()}`;
          createHTMLFromObject(auctions, con);
          loader.classList.add('d-none');
          moreBtn.disabled = 'true';
          searchInput.disabled = false;
          searchKey.classList.remove('unClickAble');
        });
      } else {
        arraySearchedAuctions.reverse().forEach((auctions) => {
          p.innerText = `${
            arraySearchedAuctions.length
          } matches for your search: ${searchInput.value.toLowerCase().trim()}`;
          createHTMLFromObject(auctions, con);
          loader.classList.add('d-none');
          moreBtn.disabled = 'true';
          searchInput.disabled = false;
          searchKey.classList.remove('unClickAble');
        });
      }
    }
  }
}
export { handleSearchClick };
