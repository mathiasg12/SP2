/**
 * function that creates a small section for updating avatar URL, the function has a if/else statement to ensure that the section
 * is not duplicated when adding it and removing it from the screen
 * @param {string} con
 */
function createUpdateSection(con) {
  if (document.getElementById('updateSection') == undefined) {
    let contianer = document.createElement('div');
    let p = document.createElement('p');
    let input = document.createElement('input');
    let btnUpdate = document.createElement('button');
    let btnCancel = document.createElement('button');
    btnUpdate.id = 'update';
    btnCancel.id = 'cancel';
    p.id = 'urlInfo';
    input.id = 'newUrl';
    contianer.id = 'updateSection';
    p.innerText = 'please add a valid image URL';
    btnUpdate.innerText = 'Update';
    btnCancel.innerText = 'Cancel';
    input.placeholder = 'URL here';
    contianer.classList.add(
      'text-white',
      'd-flex',
      'flex-column',
      'align-items-center',
      'text-center',
      'py-3',
    );
    btnUpdate.classList.add(
      'my-2',
      'rounded-pill',
      'ctaCustomHeight',
      'avatarBtn',
    );
    btnCancel.classList.add(
      'my-2',
      'rounded-pill',
      'ctaCustomHeight',
      'bg-danger',
      'avatarBtn',
    );
    input.classList.add('my-2');
    contianer.append(p, input, btnUpdate, btnCancel);
    con.append(contianer);
  } else {
    document.getElementById('updateSection').classList.remove('d-none');
    document.getElementById('urlInfo').classList.remove('text-danger');
    document.getElementById('urlInfo').innerText =
      'please add a valid image URL';
    document.getElementById('newUrl').classList.remove('border-danger');
    document.getElementById('newUrl').value = '';
  }
}
export { createUpdateSection };
