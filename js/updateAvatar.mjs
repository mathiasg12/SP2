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
      location.reload();
    } else {
      errorText.innerText =
        'sorry bad URL eighter you wrote it wrong or it is not a public picture';
      errorText.classList.add('text-danger');
      input.classList.add('border-danger');
    }
  } catch (error) {
    console.log(error);
    errorText.innerText = 'sorry something went wrong, try agian later';
  }
}
export { updateAvatar };
