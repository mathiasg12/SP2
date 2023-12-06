import { auctionObject } from './auctionSpecific.mjs';
import { orderedBids } from './sortHighestBid.mjs';
import { handleClickBid } from './handleBid.mjs';
/**
 * function that creates a form and places it in a section
 * @param {string} section
 */
function createBidForm(section) {
  if (localStorage.getItem('BidHouseToken') != null) {
    let bidForm = document.createElement('form');
    let bidinput = document.createElement('input');
    let bidLabel = document.createElement('label');
    let bidInfo = document.createElement('p');
    let bidCta = document.createElement('input');
    if (auctionObject.bids.length >= 1) {
      let newBidArray = orderedBids(auctionObject.bids);
      if (localStorage.getItem('name') == newBidArray[0].bidderName) {
        bidInfo.classList.add('text-lime');
        bidInfo.innerText = 'You are currently leading this bid round!';
      } else {
        bidInfo.innerText = 'Place a bid (min 1 above current price)';
      }
    } else {
      bidInfo.innerText = 'Place a bid (min 1 above current price)';
    }
    bidinput.type = 'number';
    bidinput.name = 'bid';
    bidLabel.innerText = 'place bid';
    bidCta.value = 'Place Bid';
    bidCta.id = 'bid';
    bidinput.id = 'bidInput';
    bidCta.type = 'submit';
    bidInfo.id = 'bidInfo';
    bidInfo.classList.add('my-3');
    bidForm.classList.add(
      'd-flex',
      'flex-column',
      'align-items-center',
      'p-4',
      'text-center',
    );
    bidCta.classList.add('my-3', 'ctaCustomHeight', 'rounded-pill');
    bidinput.classList.add('rounded', 'my-3');
    bidinput.append(bidLabel);
    bidForm.append(bidInfo, bidinput, bidCta);
    section.append(bidForm);
  } else {
    let btn = document.createElement('button');
    btn.innerText = 'Login';
    let bidInfo = document.createElement('p');
    btn.id = 'redirectToLogin';
    bidInfo.innerText = 'You need to be logged in to place a bid';
    section.append(bidInfo, btn);
    section.classList.add(
      'd-flex',
      'flex-column',
      'align-items-center',
      'my-5',
    );
    btn.classList.add('my-2', 'ctaCustomHeight', 'rounded-pill');
    /**
     * eventlistener that redirects a user to login if they press the login button on auction specific page
     */
    window.addEventListener('click', (click) => {
      if (click.target.id == 'redirectToLogin') {
        location.replace('/login.html');
      }
    });
  }
}
export { createBidForm };
/**
 * eventlisener that runs the  handleClickBid(click) function if a user clicks the bid button
 */
window.addEventListener('click', (click) => {
  handleClickBid(click);
});
