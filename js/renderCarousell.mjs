import { getAuctions } from './getAuctions.mjs';
import { createHTMLFromObject } from './auctionCard.mjs';
/**
 * function that increment the indexNr depending on what numberOfObjects is, it wrappes around the array when the indexNr is bigger than the array length -1,
 * it then calls the createHtmlfromObject function which displays the correct auctions
 * @param {string} container
 * @param {string} indexNr
 * @param {string} numberOfObjects
 * @param {string} posts
 */
function displayAuctionObjects(container, indexNr, numberOfObjects, posts) {
  container.innerText = '';
  for (let i = 0; i < numberOfObjects; i++) {
    indexNr = (indexNr + i) % posts.length;
    createHTMLFromObject(posts[indexNr], container);
  }
}
/**
 * function that decrement the indexNr depending on what numberOfObjects is,it wrappes around the array when the indexNr is under 0,
 * it then calls the createHtmlfromObject function which displays the correct auctions
 * @param {string} container
 * @param {string} indexNr
 * @param {string} numberOfObjects
 * @param {string} posts
 */
function displayAuctionObjectsReverse(
  container,
  indexNr,
  numberOfObjects,
  posts,
) {
  container.innerText = '';
  for (let i = 0; i < numberOfObjects; i++) {
    let newindex = (indexNr - i + 1) % posts.length;
    createHTMLFromObject(posts[newindex], container);
  }
}
/**
 * async function that stores the response of an api get request in an array it then displays one and one result to the user depending if they press the next arrow or back arrow
 * @param {string} container
 * @param {string} loader
 */
async function renderCarousell(
  container,
  loader,
  URL,
  arrowBackId,
  arrowNextId,
) {
  let ScreenSize = window.matchMedia('(max-width: 768px)').matches
    ? 'small'
    : 'large';
  let posts = [];
  let url = URL;
  posts = await getAuctions(url);
  let indexNr = 0;
  function diffrentScreenSizes() {
    indexNr = 0;
    if (window.matchMedia('(max-width: 768px)').matches) {
      container.innerText = '';
      createHTMLFromObject(posts[indexNr], container);
      loader.classList.add('d-none');
      window.addEventListener('click', (click) => {
        if (click.target.id === arrowNextId) {
          indexNr++;
          if (indexNr > posts.length - 1) indexNr = 0;
          container.innerText = '';
          createHTMLFromObject(posts[indexNr], container);
        } else {
          container.innerText = '';
          createHTMLFromObject(posts[indexNr], container);
        }
      });
      /**
       * event listener that runs if the user clicks the arrow symbol if so, the function will increment the indexNr variable and run a function called displayAuctionObject
       */
      window.addEventListener('click', (click) => {
        if (click.target.id === arrowBackId) {
          indexNr--;
          if (indexNr < 0) indexNr = posts.length - 1;
          container.innerText = '';
          createHTMLFromObject(posts[indexNr], container);
        } else {
          container.innerText = '';
          createHTMLFromObject(posts[indexNr], container);
        }
      });
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      container.innerText = '';
      displayAuctionObjects(container, indexNr, 2, posts);
      loader.classList.add('d-none');
      /**
       * event listener that runs if the user clicks the arrow symbol if so, the function will increment the indexNr variable and run a function called displayAuctionObject
       */
      window.addEventListener('click', (click) => {
        if (click.target.id === arrowNextId) {
          indexNr = (indexNr + 2) % posts.length;
          displayAuctionObjects(container, indexNr, 2, posts);
        } else if (click.target.id === arrowBackId) {
          if (indexNr == 0) {
            indexNr = posts.length - 2;
            displayAuctionObjectsReverse(container, indexNr, 2, posts);
          } else {
            indexNr = (indexNr - 2 + posts.length) % posts.length;
            displayAuctionObjectsReverse(container, indexNr, 2, posts);
          }
        }
      });
    }
  }
  diffrentScreenSizes();
  /**
   * eventlistener that creates a new variable called newScreenSize that is eighter small or large, the eventlistener listen to resize so if a screen goes from
   * large to small or small to large, the page reloads(), this was the only way to ensure that the array didnt break if a user went from a small screen to a big screen or vice versa
   */
  window.addEventListener('resize', () => {
    let newScreensize = window.matchMedia('(max-width: 768px)').matches
      ? 'small'
      : 'large';
    if (newScreensize !== ScreenSize) {
      container.innerText = '';
      loader.classList.remove('d-none');
      location.reload();
    }
  });
}
export { renderCarousell };
