import { getProfilInfo } from './getProfile.mjs';
import { getOwnAuctions } from './getUserListings.mjs';
import { PROFILE_URL } from './variables.mjs';
import { improvedTimeFormat } from './timeFormat.mjs';
/**
 * async function that gets a users bid history with a function called getOwnAuctions and calls the getprofileInfo function which retrives profile info,
 * the function then loops the bid array and then dispalays it in a section (con), if the user has not bid on anything they will recive a message
 * @param {string} con
 */
async function getUserBids(con) {
  let user = await getProfilInfo(con);
  let { name } = user;
  let bids = await getOwnAuctions(
    PROFILE_URL + name + '/bids?_listings=true',
    con,
  );
  if (bids.length >= 1) {
    document.querySelector('.loaderHistory').classList.add('d-none');
    bids.forEach((bid) => {
      let div = document.createElement('div');
      let { amount, created, listing } = bid;
      let imgCon = document.createElement('div');
      let img = document.createElement('img');
      img.src = listing.media;
      img.addEventListener('error', () => {
        img.src = './pictures/error.jpg';
      });
      img.alt = 'auction picture';
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
      let amountAndDateCon = document.createElement('div');
      let bidAmount = document.createElement('p');
      let bidDate = document.createElement('p');
      let title = document.createElement('p');
      title.innerText = adjustTitle(listing.title);
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
        'row',
      );
      imgCon.classList.add(
        'col-sm-6',
        'col-12',
        'd-flex',
        'justify-content-center',
        'mb-2',
      );
      img.classList.add('img-fluid', 'bidImg', 'border', 'border-black');
      bidAmount.classList.add('mx-auto', 'text-darkGreen', 'mb-1');
      bidDate.classList.add('mx-auto', 'mb-1', 'text-center');
      title.classList.add('mx-auto', 'mb-1', 'fs-4');
      amountAndDateCon.classList.add(
        'd-flex',
        'flex-column',
        'col-sm-6',
        'col-12',
        'align-items-center',
        'align-items-sm-start',
      );
      bidAmount.innerText = amount + ' ' + 'Credits';
      bidDate.innerText = 'Bid made:' + ' ' + improvedTimeFormat(created);
      imgCon.append(img);
      div.append(imgCon, amountAndDateCon);
      amountAndDateCon.append(title, bidDate, bidAmount);
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
