import { improvedTimeFormat } from './timeFormat.mjs';
import { getLeadingBid } from './findLeadingBid.mjs';
/**
 * funnction that uses an object to make HTML and appends it to a section on the page
 * @param {object} object
 * @param {string} section
 */
function createHTMLFromObject(object, section) {
  let { created, description, endsAt, media, title, bids } = object;
  let highestBid = document.createElement('p');
  let card = document.createElement('a');
  let imgCon = document.createElement('div');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let desc = document.createElement('p');
  let endDate = document.createElement('p');
  let newEndsAt = improvedTimeFormat(endsAt);
  img.src = media;
  h3.innerText = title;
  desc.innerText = description;
  endDate.innerText = 'Ends at:' + ' ' + newEndsAt;
  highestBid.innerText = getLeadingBid(bids);
  imgCon.append(img);
  card.append(imgCon);
  card.append(h3);
  card.append(desc);
  card.append(highestBid);
  card.append(endDate);
  section.append(card);
  img.classList.add('img-fluid');
  card.classList.add('d-flex');
  card.classList.add('flex-column');
  card.classList.add('bg-black');
  card.classList.add('p-2');
  card.classList.add('my-5');
  card.classList.add('mx-md-4');
  card.style.maxWidth = '250px';
  card.classList.add('rounded');
  card.classList.add('text-decoration-none');
  card.classList.add('text-white');
  card.classList.add('align-items-center');
  h3.classList.add('my-3');
  endDate.classList.add('text-golden');
  endDate.classList.add('p-1');
  desc.classList.add('p-1');
  desc.classList.add('text-center');
  highestBid.classList.add('text-white');
}
export { createHTMLFromObject };
