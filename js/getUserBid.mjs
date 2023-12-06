import { getProfilInfo } from './getProfile.mjs';
import { getOwnAuctions } from './getUserListings.mjs';
import { PROFILE_URL } from './variables.mjs';
import { improvedTimeFormat } from './timeFormat.mjs';
/**
 * async function that gets a users bid history with a function called getOwnAuctions and calls the getprofileInfo function which retrives profile info,
 * the function the loops the bid array and then dispalays it in a section (con), if the user has not bid on anything they will recive a message
 * @param {string} con
 */
async function getUserBids(con) {
  let user = await getProfilInfo();
  let { name } = user;
  let bids = await getOwnAuctions(PROFILE_URL + name + '/bids');
  if (bids.length >= 1) {
    document.querySelector('.loaderHistory').classList.add('d-none');
    bids.forEach((bid) => {
      let div = document.createElement('div');
      let { amount, created } = bid;
      let amountAndDateCon = document.createElement('div');
      let bidAmount = document.createElement('p');
      let bidDate = document.createElement('p');
      div.classList.add(
        'bg-white',
        'text-black',
        'rounded',
        'py-4',
        'px-3',
        'd-flex',
        'text-decoration-none',
        'my-3',
        'customWidthBid',
      );
      bidAmount.classList.add('mx-4', 'text-darkGreen', 'mb-0');
      bidDate.classList.add('mx-4', 'mb-0');
      amountAndDateCon.classList.add('d-flex', 'amountAndDateCon');
      bidAmount.innerText = amount + ' ' + 'Credits';
      bidDate.innerText = improvedTimeFormat(created);
      div.append(amountAndDateCon);
      amountAndDateCon.append(bidDate);
      amountAndDateCon.append(bidAmount);
      con.append(div);
    });
  } else {
    document.querySelector('.loaderHistory').classList.add('d-none');
    let h3 = document.createElement('h3');
    h3.innerText = 'you have not bid on anything yet';
    h3.classList.add('text-center', 'my-3');
    con.append(h3);
  }
}

export { getUserBids };
