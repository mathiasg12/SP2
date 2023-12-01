/**
 * a functionn that gets an array of users own listings from the api and returns it
 * @param {string} url
 * @returns an array of objects
 */
async function getOwnAuctions(url) {
  try {
    const method = {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        authorization: `bearer ${localStorage.getItem('BidHouseToken')}`,
      },
    };
    const response = await fetch(url, method);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
}
export { getOwnAuctions };
