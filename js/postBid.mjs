/**
 * function that takes three parameters url, yourbid and bidinfo, where yourbid is user input, the function takes that input and
 * sends it to the api with a POST request and places a bid on an item
 * @param {string} url
 * @param {Number} yourBid
 * @param {string} bidInfo
 */
async function bidOnItem(url, yourBid, bidInfo) {
  try {
    const bid = {
      method: 'post',
      headers: {
        'content-Type': 'application/json',
        authorization: `bearer ${localStorage.getItem('BidHouseToken')}`,
      },
      body: JSON.stringify({ amount: yourBid }),
    };
    let sendBid = await fetch(url, bid);
    let response = await sendBid.json();
    location.reload();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
export { bidOnItem };
