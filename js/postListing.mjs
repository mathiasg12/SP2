/**
 * async function that sends a listing object to the api and displays a message if the call i successfull and displays an error message if an error occurs
 * @param {string} url
 * @param {object} object
 * @param {string} form
 * @param {array} arrayOfImages
 * @param {string} addedImgCon
 */
async function postListing(url, object, form, arrayOfImages, addedImgCon) {
  let message = document.createElement('p');
  let messageCon = document.createElement('div');
  messageCon.id = 'messageCon';
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
    if (sendListing.ok) {
      messageCon.append(message);
      message.classList.add('text-darkGreen', 'fs-4', 'text-center');
      message.innerText = ' You successfully created a Listing';
      form.prepend(messageCon);
      form.reset();
      arrayOfImages = [];
      let allPElements = addedImgCon.querySelectorAll('p');
      for (let i = 0; i < allPElements.length; i++) {
        addedImgCon.removeChild(allPElements[i]);
      }
      console.log(arrayOfImages);
    } else {
      message.innerText =
        'something went wrong please try again later:' +
        ' ' +
        response.errors[0].message;
      messageCon.append(message);
      form.prepend(messageCon);
      message.classList.add('mb-0');
      messageCon.classList.add(
        'text-danger',
        'text-center',
        'semiTransparent',
        'p-2',
        'rounded',
      );
    }
  } catch (error) {
    console.log(error);
  }
}
export { postListing };
