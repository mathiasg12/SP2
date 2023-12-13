/**
 * function that creates a confirme deletion modal so the user cant delete auction if they didnt want to, the modal has info text
 * a cancel button and a delete confirme button
 * @param {string} con
 */
function deleteConfirme(con) {
  let cancelBtn = document.createElement('button');
  let confirmeBtn = document.createElement('button');
  let deleteInfo = document.createElement('p');
  let buttonContainer = document.createElement('div');
  cancelBtn.classList.add('bg-golden', 'my-2', 'ctaCustomHeight', 'rounded');
  confirmeBtn.classList.add(
    'text-white',
    'bg-danger',
    'my-2',
    'ctaCustomHeight',
    'rounded',
  );
  cancelBtn.innerText = 'Cancel';
  confirmeBtn.innerText = 'Delete';
  cancelBtn.id = 'cancelDeletion';
  confirmeBtn.id = 'deleteConfirme';
  deleteInfo.innerText = 'Are you sure you want to delete this auction?';
  deleteInfo.classList.add('text-danger', 'fs-5');
  buttonContainer.classList.add('bg-white', 'px-2', 'py-3', 'deleteModal');
  buttonContainer.append(deleteInfo, confirmeBtn, cancelBtn);
  con.append(buttonContainer);
}
async function deleteAuction(url, con, errorOrSuccessCon) {
  try {
    let token = localStorage.getItem('BidHouseToken');
    const method = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let deleteThisItem = await fetch(url, method);
    if (deleteThisItem.ok) {
      con.innerText = ' ';
      errorOrSuccessCon.innerText = ' ';
      let successMessage = document.createElement('p');
      successMessage.innerText = `You successfully deleted an Auction`;
      successMessage.classList.add('apiSuccess', 'text-center');
      errorOrSuccessCon.prepend(successMessage);
    } else {
      let deleteJson = deleteThisItem.json();
      con.innerText = ' ';
      errorOrSuccessCon.innerText = ' ';
      let errorCon = document.createElement('p');
      errorCon.innerText = `Sorry something went wrong: ${deleteJson.errors[0].message}`;
      errorCon.classList.add('apiError', 'text-white', 'text-center');
      errorOrSuccessCon.prepend(errorCon);
    }
  } catch (error) {
    con.innerText = ' ';
    errorOrSuccessCon.innerText = ' ';
    console.log(error);
    let errorCon = document.createElement('p');
    errorCon.innerText = `Sorry something went wrong: ${error}`;
    errorCon.classList.add('apiError', 'text-white', 'text-center');
    errorOrSuccessCon.prepend(errorCon);
  }
}
export { deleteConfirme, deleteAuction };
