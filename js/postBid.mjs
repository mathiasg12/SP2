/**
 * function that takes three parameters url, yourbid and bidinfo, where yourbid is user input, the function takes that input and
 * sends it to the api with a POST request and places a bid on an item
 * @param {string} url
 * @param {Number} yourBid
 * @param {string} bidInfo
 */
async function bidOnItem(url, yourBid, bidInfo, input) {
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
    if (sendBid.ok) {
      location.reload();
    } else {
      bidInfo.classList.add('apiError', 'text-white');
      bidInfo.innerText = `sorry somthing went wrong, ${response.errors[0].message}`;
      input.classList.add('border-danger');
    }
  } catch (error) {
    bidInfo.classList.add('apiError', 'text-white');
    bidInfo.innerText = `sorry somthing went wrong, ${error}`;
    console.log(error);
  }
}
export { bidOnItem };
