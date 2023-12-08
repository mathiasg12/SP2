/**
 * a functionn that gets an array of objects from the api and returns it
 * @param {string} url
 * @returns an array of objects
 */
async function getAuctions(url) {
  try {
    const method = {
      method: 'GET',
    };
    const response = await fetch(url, method);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
    let errorCon = document.createElement('p');
    errorCon.innerText = `Sorry something went wrong: ${error}`;
    errorCon.classList.add('apiError', 'text-white', 'my-5');
    document.querySelector('main').prepend(errorCon);
    document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' });
  }
}
/**
 * a get function that loops thru the array and puts all auctions in an new array it then flaten the array of arrays to a array of objects
 * @param {string} url
 * @returns flat array with all auctions in the api
 */
async function getAllAuctions(url) {
  try {
    const method = {
      method: 'GET',
    };
    let allAuctions = [];
    let page = 1;
    let offset = 100;
    for (let i = 0; i < page; i++) {
      page++;
      const response = await fetch(
        url + `?_active=true&_bids=true&limit=${100}&&offset=${offset * i}`,
        method,
      );
      const responseJson = await response.json();
      if (responseJson.length >= 1) {
        allAuctions.push(responseJson);
      } else {
        let flatenArray = allAuctions.flatMap((object) => {
          return object;
        });
        return flatenArray;
      }
    }
  } catch (error) {
    console.log(error);
    let errorCon = document.createElement('p');
    errorCon.innerText = `Sorry something went wrong: ${error}`;
    errorCon.classList.add('apiError', 'text-white');
    document.querySelector('main').prepend(errorCon);
    document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' });
  }
}
export { getAuctions, getAllAuctions };
