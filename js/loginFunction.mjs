/**
 * function that uses a users input to send a request to the api if the credentials matches the api sends back a respose the fuction then stores the accessToken in local storage,
 * if the api declines the request the fuction displays ann error message to the user
 * @param {string} url
 * @param {string} errorCon
 * @param {string} email
 * @param {string} password
 */
async function loginUser(url, errorCon, email, password, header) {
  try {
    const login = {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    };
    let response = await fetch(url, login);
    let responseJson = await response.json();
    if (response.status == 200) {
      errorCon.innerText =
        'Login to start biding or signup with a Free account';
      errorCon.classList.remove('apiError');
      if (responseJson.accessToken != undefined) {
        localStorage.setItem('BidHouseToken', responseJson.accessToken);
        localStorage.setItem('name', responseJson.name);
        location.replace('profile.html');
      }
    } else {
      errorCon.innerText = responseJson.errors[0].message;
      errorCon.classList.add('apiError');
      document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' });
    }
  } catch (error) {
    console.log(error);
    errorCon.innerText = responseJson.errors[0].message;
    errorCon.classList.add('apiError');
    document.querySelector('html').scrollTo({ top: 0, behavior: 'smooth' });
  }
}
export { loginUser };
