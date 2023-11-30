/**
 * async function that sends a listing object to the api and displays a message if the call i successfull and displays an error message if an error occurs
 * @param {string} url
 * @param {object} object
 */
async function postListing(url, object) {
  try {
    const listing = {
      method: 'post',
      headers: {
        'content-Type': 'application/json',
        authorization: `bearer ${localStorage.getItem('BidHouseToken')}`,
      },
      body: JSON.stringify(object),
    };
    let sendListing = await fetch(url, listing);
    let response = await sendListing.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
export { postListing };
