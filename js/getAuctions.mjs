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

    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
}
export { getAuctions };
