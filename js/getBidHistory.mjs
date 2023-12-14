import { improvedTimeFormat } from './timeFormat.mjs';
/**
 * function that takes an array of bids and loopes them, and then displays each bid in a container, takes two parameters bids and con, bids is the array of bids and con is the container
 * @param {Array} bids
 * @param {string} con
 */
function getbidHistory(bids, con) {
  let bidsLength = bids.length;
  if (bidsLength >= 1) {
    for (let i = 0; i < bidsLength; i++) {
      let name = document.createElement('p');
      let bid = document.createElement('p');
      let date = document.createElement('p');
      let allBidsCon = document.createElement('div');
      name.innerText = `${bids[i].bidderName}`;
      bid.innerText = `${bids[i].amount}`;
      date.innerText = `${improvedTimeFormat(bids[i].created)}`;
      allBidsCon.append(name, bid, date);
      allBidsCon.classList.add('row', 'text-center', 'mx-auto');
      name.classList.add('col-4', 'specificP');
      bid.classList.add('col-4', 'specificP');
      date.classList.add('col-4', 'specificP');
      con.append(allBidsCon);
      if (localStorage.getItem('name') == name.textContent) {
        allBidsCon.classList.add('text-lime');
      }
    }
  } else {
    return 'No bids yet';
  }
}
export { getbidHistory };
