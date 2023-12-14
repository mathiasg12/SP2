import { handleClickBid } from './handleBid.mjs';
/**
 * function that creates a form and places it in a section, the form is meant to be used on the specific page,
 * and allow users to place a bid
 * @param {string} section
 */
function createBidForm(section) {
  if (localStorage.getItem('BidHouseToken') != null) {
    let bidForm = document.createElement('form');
    let bidinput = document.createElement('input');
    let bidLabel = document.createElement('label');
    let bidInfo = document.createElement('p');
    let bidCta = document.createElement('input');
    bidInfo.innerText = 'Place a bid (min 1 above current price)';
    bidinput.type = 'number';
    bidinput.name = 'bid';
    bidLabel.innerText = 'place bid';
    bidLabel.setAttribute('for', 'bid');
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
    bidLabel.hidden = true;
    bidCta.classList.add(
      'my-3',
      'ctaCustomHeight',
      'rounded-pill',
      'bidCtaHover',
    );
    bidinput.classList.add('rounded', 'my-3');
    bidinput.append(bidLabel);
    bidForm.append(bidInfo, bidLabel, bidinput, bidCta);
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
    btn.classList.add('my-2', 'ctaCustomHeight', 'rounded-pill', 'bidCtaHover');
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
 * eventlisener that runs the handleClickBid(click) function if a user clicks the bid button
 */
window.addEventListener('click', (click) => {
  handleClickBid(click);
});
