import { improvedTimeFormat } from './timeFormat.mjs';
import { getLeadingBid } from './findLeadingBid.mjs';
import { getbidHistory } from './getBidHistory.mjs';
import { createBidForm } from './bidForm.mjs';
import { orderedBids } from './sortHighestBid.mjs';
/**
 * funnction that uses an object to make HTML and appends it to a section on the page, this function is created for the specific page
 * @param {object} object
 * @param {string} section
 */
function createHTMLSpecific(object, section, loader) {
  let { description, endsAt, media, title, bids, seller } = object;
  console.log(object);
  let newBidsArray = orderedBids(bids);
  let divEndAndBids = document.createElement('div');
  let h1 = document.createElement('h1');
  let desc = document.createElement('p');
  let endDate = document.createElement('p');
  let newEndsAt = improvedTimeFormat(endsAt);
  let bidHistoryCon = document.createElement('div');
  let bidHistory = document.createElement('p');
  let bidHistoryContent = document.createElement('div');
  let imgCon = document.createElement('div');
  let img = document.createElement('img');
  let currentBid = document.createElement('p');
  let totalBid = document.createElement('p');
  let bidCta = document.createElement('button');
  let bidHistoryContentName = document.createElement('p');
  let bidHistoryContentBid = document.createElement('p');
  let bidHistoryContentDate = document.createElement('p');
  let youAreLeadingBid = document.createElement('p');
  let imgNr = 0;
  let ctaCon = document.createElement('div');
  let soldByCon = document.createElement('div');
  let soldByHeading = document.createElement('p');
  let soldByName = document.createElement('p');
  let soldByAvatar = document.createElement('img');
  youAreLeadingBid.innerText = 'You are currently leading this bid round!';
  youAreLeadingBid.classList.add('text-lime', 'mb-3', 'mb-md-0');
  if (bids.length >= 1) {
    if (localStorage.getItem('name') == orderedBids(bids)[0].bidderName) {
      ctaCon.append(youAreLeadingBid);
    }
  }
  soldByName.innerText = seller.name;
  soldByAvatar.src = seller.avatar;
  soldByHeading.innerText = 'Seller information';
  soldByAvatar.alt = `avatar of ${seller.name}`;
  soldByCon.append(soldByHeading, soldByAvatar, soldByName);
  soldByAvatar.addEventListener('error', () => {
    soldByAvatar.src = './pictures/error.jpg';
    soldByAvatar.alt = `backup image, image could not be found`;
  });
  soldByAvatar.classList.add(
    'img-fluid',
    'img-thumbnail',
    'rounded-circle',
    'customWidthImages',
  );
  soldByCon.classList.add(
    'd-flex',
    'flex-column',
    'align-items-center',
    'p-3',
    'mx-auto',
    'mx-md-0',
    'mt-5',
    'mt-md-2',
    'border',
    'soldByCon',
    'text-center',
  );
  soldByHeading.classList.add('fs-5', 'mb-4');
  soldByName.classList.add('mt-3');
  loader.classList.add('d-none');
  bidHistoryContentName.innerText = 'Name';
  bidHistoryContentBid.innerText = 'Bid';
  bidHistoryContentDate.innerText = 'Date';
  bidHistoryContent.append(
    bidHistoryContentName,
    bidHistoryContentBid,
    bidHistoryContentDate,
  );
  img.src = media[imgNr];
  img.alt = `picture of ${title}`;
  img.addEventListener('error', () => {
    img.src = './pictures/error.jpg';
    img.alt = `backup image, image could not be found`;
  });
  bidHistory.innerText = 'Bid History';
  currentBid.innerText = getLeadingBid(bids);
  h1.innerText = title;
  if (title.length < 1) {
    h1.innerText = 'No Title';
  }
  bidCta.innerText = 'Bid now';
  desc.innerText = description;
  endDate.innerText = `Ends at: ${newEndsAt}`;
  ctaCon.append(bidCta);
  divEndAndBids.append(desc, currentBid, totalBid, endDate, soldByCon);
  bidHistoryCon.append(bidHistory, bidHistoryContent);
  getbidHistory(newBidsArray, bidHistoryCon);
  totalBid.innerText = `Total bids: ${bids.length}`;
  imgCon.append(img);
  img.id = 'firstImg';
  if (media.length > 1) {
    let allImgCon = document.createElement('div');
    let arrow = document.createElement('i');
    arrow.id = 'next';
    arrow.classList.add(
      'fa-solid',
      'fa-arrow-right',
      'my-auto',
      'fs-1',
      'mx-1',
    );
    for (let i = 0; i < media.length; i++) {
      let allImg = document.createElement('img');
      allImg.src = media[i];
      allImg.alt = 'auction image';
      allImgCon.append(allImg);
      allImgCon.append(arrow);
      imgCon.append(allImgCon);
      allImg.classList.add('img-fluid', 'me-2', 'w-25', 'my-2');
      allImgCon.classList.add(
        'w-100',
        'my-3',
        'd-flex',
        'flex-wrap',
        'justify-content-left',
        'col-md-8',
      );
    }
  }
  /**
   * event listenere that displays the next image in the media array if a user clicks the arrow symbol, if the user clicks the arrow while
   * curently at the last image in the array, the array loops around
   */
  window.addEventListener('click', (click) => {
    if (click.target.id === 'next') {
      if (imgNr < media.length - 1) {
        imgNr++;
        img.src = media[imgNr];
      } else {
        imgNr = 0;
        img.src = media[imgNr];
      }
    }
  });
  section.append(h1, imgCon, divEndAndBids, ctaCon, bidHistoryCon);
  bidCta.id = 'placeBid';
  h1.classList.add('my-5', 'text-center', 'text-break');
  bidHistoryCon.classList.add('container', 'mb-5');
  bidHistory.classList.add('text-center', 'fs-4', 'mt-5');
  bidHistoryContent.classList.add(
    'row',
    'mx-auto',
    'text-center',
    'fs-5',
    'my-2',
  );
  bidHistoryContentName.classList.add('col-4');
  bidHistoryContentBid.classList.add('col-4');
  bidHistoryContentDate.classList.add('col-4');
  totalBid.classList.add('mb-2', 'customSpacingRules');
  currentBid.classList.add('mb-2', 'fs-5', 'customSpacingRules');
  ctaCon.classList.add('text-center', 'my-5', 'py-3');
  desc.classList.add('my-0', 'mb-3', 'text-white');
  endDate.classList.add('text-golden', 'customSpacingRules');
  img.classList.add('img-fluid');
  imgCon.classList.add(
    'imgSpecific',
    'mx-auto',
    'mx-md-1',
    'col-md-6',
    'd-flex',
    'flex-column',
    'align-items-center',
  );
  divEndAndBids.classList.add(
    'my-4',
    'col-md-4',
    'mx-auto',
    'mx-md-1',
    'my-md-0',
    'customSpacingRules',
    'divEndAndBids',
    'd-flex',
    'flex-column',
    'align-items-center',
    'align-items-md-start',
  );
  bidCta.classList.add(
    'rounded-pill',
    'ctaCustomHeight',
    'my-sm-5',
    'bidCtaHover',
  );
  /**
   * event listener that runs when a a user clicks on a item with the id of placeBid it will then make a bid form, if the button is pressed
   * on the users own post the button is diabled and the user gets a message
   */
  window.addEventListener('click', (click) => {
    if (click.target.id == 'placeBid') {
      if (localStorage.getItem('name') === seller.name) {
        let ctaMessage = document.createElement('p');
        ctaMessage.innerText = 'you cant bid on your own auction';
        ctaCon.prepend(ctaMessage);
        ctaMessage.classList.add('m-0');
        bidCta.disabled = true;
      } else {
        createBidForm(ctaCon);
        click.target.classList.add('d-none');
      }
    }
  });
}
export { createHTMLSpecific };
