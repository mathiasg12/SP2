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
function createHTMLSpecific(object, section) {
  let { description, endsAt, media, title, bids } = object;
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
  let imgNr = 0;
  let ctaCon = document.createElement('div');
  bidHistoryContentName.innerText = 'Name';
  bidHistoryContentBid.innerText = 'Bid';
  bidHistoryContentDate.innerText = 'Date';
  bidHistoryContent.append(
    bidHistoryContentName,
    bidHistoryContentBid,
    bidHistoryContentDate,
  );
  img.src = media[imgNr];
  bidHistory.innerText = 'Bid History';
  currentBid.innerText = getLeadingBid(bids);
  h1.innerText = title;
  bidCta.innerText = 'Bid now';
  desc.innerText = description;
  endDate.innerText = `Ends at: ${newEndsAt}`;
  ctaCon.append(bidCta);
  divEndAndBids.append(desc, currentBid, totalBid, endDate);
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
      );
    }
  }
  window.addEventListener('click', (click) => {
    if (click.target.id === 'next') {
      if (imgNr < media.length - 1) {
        imgNr++;
        img.src = media[imgNr];
        console.log(imgNr);
      } else {
        imgNr = 0;
        img.src = media[imgNr];
        console.log(imgNr);
      }
    }
  });
  section.append(h1, imgCon, divEndAndBids, ctaCon, bidHistoryCon);
  bidCta.id = 'placeBid';
  h1.classList.add('my-5', 'text-center', 'text-break');
  bidHistoryCon.classList.add('container');
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
  ctaCon.classList.add('text-center', 'my-4');
  desc.classList.add('my-0', 'mb-4', 'text-white');
  endDate.classList.add('text-golden', 'customSpacingRules');
  img.classList.add('img-fluid');
  imgCon.classList.add('imgSpecific', 'mx-auto', 'mx-md-1', 'col-md-6');
  divEndAndBids.classList.add(
    'my-4',
    'col-md-6',
    'mx-auto',
    'mx-md-1',
    'my-md-0',
    'customSpacingRules',
  );
  bidCta.classList.add('rounded-pill', 'ctaCustomHeight', 'my-4', 'my-sm-5');
  /**
   * event listener that runs when a a user clicks on a item with the id of placeBid it will then make a bid form
   */
  window.addEventListener('click', (click) => {
    if (click.target.id == 'placeBid') {
      createBidForm(ctaCon);
      click.target.classList.add('d-none');
    }
  });
}
export { createHTMLSpecific };
