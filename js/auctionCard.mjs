import { improvedTimeFormat } from './timeFormat.mjs';
import { getLeadingBid } from './findLeadingBid.mjs';
/**
 * small function that limits the title to 14 characters so a auction cant have a 280 character title, it also adds a "no title" to the card if the object dont have a title
 * @param {string} title
 */
function adjustTitle(title) {
  if (title != '') {
    if (title.length >= 14) {
      return title.slice(0, 14) + '...';
    } else {
      return title;
    }
  } else {
    return 'no title';
  }
}
/**
 * funnction that uses an object to make HTML and appends it to a section on the page
 * @param {object} object
 * @param {string} section
 */
function createHTMLFromObject(object, section) {
  let { description, endsAt, media, title, bids, id } = object;
  let highestBid = document.createElement('p');
  let divBid = document.createElement('div');
  let divEnd = document.createElement('div');
  let card = document.createElement('a');
  let imgCon = document.createElement('div');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let endDate = document.createElement('p');
  let newEndsAt = improvedTimeFormat(endsAt);
  img.src = media;
  h3.innerText = adjustTitle(title);
  /**
   * eventlistener that adds a default image if the image recived can not be loaded or a image is not recived that all
   */
  img.addEventListener('error', () => {
    img.src = './pictures/error.jpg';
  });
  endDate.innerText = 'Ends at:' + ' ' + newEndsAt;
  highestBid.innerText = getLeadingBid(bids);
  divEnd.append(endDate);
  divBid.append(highestBid);
  imgCon.append(img);
  card.append(imgCon);
  card.append(h3);
  card.append(divBid);
  card.append(divEnd);
  card.href = 'auctionSpecific.html?id=' + id;
  section.append(card);
  img.classList.add('img-fluid');
  img.alt = 'auction picture';
  card.classList.add(
    'd-flex',
    'align-items-center',
    'flex-column',
    'bg-black',
    'p-2',
    'my-4',
    'mx-md-4',
    'auctionCard',
    'rounded',
    'text-decoration-none',
    'text-white',
    'text-center',
  );
  h3.classList.add('my-3', 'fs-4');
  endDate.classList.add('text-golden', 'text-center', 'p-1', 'mt-2', 'mb-2');
  highestBid.classList.add('text-lightGolden', 'mb-2', 'text-center', 'mt-2');
  divEnd.classList.add('insideBorders', 'w-100');
  divBid.classList.add('insideBorders', 'w-100');
}
export { createHTMLFromObject };
export { adjustTitle };
