import { getAuctions } from './getAuctions.mjs';
/**
 * a function that calls a function called getAuctions that returns an array of objects, the function then save these objects in a new array,
 * and then uses the forEach method, inside the forEach method a new funtion is called which takes these objects and creates HTML and places them in a section
 * @param {string} url: the url used to call the api
 * @param {string} section: where the objects will be displayed
 * @param {function} HtmlFunction: the funtion which takes objects and makes content
 */
async function displayFromArray(url, HtmlFunction, section) {
  let arrayOfAuction = await getAuctions(url, section);
  document.querySelector('.loader').classList.add('d-none');
  arrayOfAuction.forEach((auctions) => {
    HtmlFunction(auctions, section);
  });
}
export { displayFromArray };
