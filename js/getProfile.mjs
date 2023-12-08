import { PROFILE_URL } from './variables.mjs';
/**
 * fuction that gets a profile based on what is store in local storage, and then gets the credit to that user, the function takes two parameters,
 *  that is used for displaying the credit in the header if the function is called without the paramteres the credit value is returned.
 * @param {string} display1
 * @param {string} display2
 */
async function getProfilInfo(display1, display2) {
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
    if (display1 && display2 != undefined) {
      display1.innerText += ' ' + credit;
      display2.innerText += ' ' + credit;
    } else {
      return await responseJson;
    }
  } catch (error) {
    if (display1 && display2 != undefined) {
      display1.classList.add('apiError', 'text-white');
      display2.classList.add('apiError', 'text-white');
      display1.innerText = `Something went wrong`;
      display2.innerText = `Something went wrong`;
      if (document.querySelector('.profileSection') != undefined) {
        let errormsg = document.createElement('p');
        errormsg.classList.add('apiError', 'text-white', 'my-5');
        errormsg.innerText = `Something went wrong`;
        document.querySelector('.profileSection').prepend(errormsg);
      }
    }
  }
}
export { getProfilInfo };
