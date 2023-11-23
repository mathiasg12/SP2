import { PROFILE_URL } from './variables.mjs';
/**
 * fuction that gets a profile based on what is store in local storage, and then gets the credit to that user
 * @param {string} display1
 * @param {string} display2
 */
async function getCredit(display1, display2) {
  try {
    let token = localStorage.getItem('BidHouseToken');
    const auth = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      PROFILE_URL + localStorage.getItem('name'),
      auth,
    );
    const responseJson = await response.json();
    const credit = await responseJson.credits;
    display1.innerText += ' ' + credit;
    display2.innerText += ' ' + credit;
  } catch (error) {
    console.log(error);
  }
}
export { getCredit };