/**
 * async function that sends an object with a PUT request that changes a users avatar picture, the function also displays a message if any errors occure
 * @param {string} url
 * @param {string} link
 * @param {string} errorText
 * @param {string} input
 */
async function updateAvatar(url, link, errorText, input) {
  try {
    let token = localStorage.getItem('BidHouseToken');
    const sendAvatar = {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ avatar: link }),
    };
    let sendData = await fetch(url, sendAvatar);
    if (sendData.ok) {
      errorText.classList.remove('apiError');
      errorText.classList.remove('text-danger');
      location.reload();
    } else {
      errorText.classList.add('apiError');
      errorText.innerText =
        'sorry bad URL eighter you wrote it wrong or it is not a public picture';
      errorText.classList.remove('text-danger');
      input.classList.add('border-danger');
    }
  } catch (error) {
    console.error(error);
    errorText.classList.add('apiError');
    errorText.classList.remove('text-danger');
    errorText.innerText = 'sorry something went wrong, try agian later';
  }
}
export { updateAvatar };
