import { improvedTimeFormat } from './timeFormat.mjs';
/**
 * funnction that uses an object to make HTML and appends it to a section on the page
 * @param {object} object
 * @param {string} section
 */
function createHTMLFromObject(object, section) {
  let { created, description, endsAt, media, title } = object;
  let card = document.createElement('a');
  let imgCon = document.createElement('div');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let desc = document.createElement('p');
  let endDate = document.createElement('p');
  let bidNowCta = document.createElement('button');
  let newEndsAt = improvedTimeFormat(endsAt);
  img.src = media;
  h3.innerText = title;
  desc.innerText = description;
  endDate.innerText = 'Ends at:' + ' ' + newEndsAt;
  bidNowCta.innerText = 'Bid now';
  imgCon.append(img);
  card.append(imgCon);
  card.append(h3);
  card.append(desc);
  card.append(endDate);
  card.append(bidNowCta);
  section.append(card);
}
export { createHTMLFromObject };
