import { getOwnAuctions } from './getUserListings.mjs';
/**
 * async function that gets all auction from a user if thre are any and calls a function that creats HTML, if thre are not any listings it will display a message
 * @param {string} url
 * @param {function} HtmlFunction
 * @param {string} section
 */
async function displayFromOwnAuctions(url, HtmlFunction, section) {
  let arrayOfAuction = await getOwnAuctions(url, section);
  document.querySelector('.loader').classList.add('d-none');
  if (arrayOfAuction.length >= 1) {
    arrayOfAuction.forEach((auctions) => {
      HtmlFunction(auctions, section);
    });
  } else {
    let h3 = document.createElement('h3');
    h3.innerText = 'You have not made any Listings yet';
    h3.classList.add('text-center', 'my-3');
    section.append(h3);
  }
}
export { displayFromOwnAuctions };
