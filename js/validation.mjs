/**
 * function that checks if an input contains a minimum amount of characters if so the function returns true,
 * else it returns false, the function also adds or removes classes and text based on the outcome.
 * @param {string} input
 * @param {string} length
 * @param {string} type
 * @param {string} label
 * @returns {boolean}
 */
function checkLength(input, length, type, label, textColor) {
  if (input.value.trim().length >= length) {
    label.innerText = type;
    label.classList.remove('text-danger');
    label.classList.add(textColor);
    input.classList.remove('border-danger');
    label.classList.remove('labelDangerWhite');
    label.classList.remove('labelDanger');
    label.classList.add('lh-lh');
    return true;
  } else {
    label.innerText = `${type} needs to have ${length} characters or more`;
    label.classList.remove(textColor);
    label.classList.add('text-danger');
    input.classList.add('border-danger');
    if (label.id === 'titleLabel' || label.id === 'descLabel') {
      label.classList.add('labelDangerWhite');
    } else {
      label.classList.add('labelDanger');
    }
    label.classList.remove('lh-lh');
    return false;
  }
}
/**
 * function that checks if two inputs are the same, if so the function returns true,
 * else it returns false, the function also adds or removes classes and text based on the outcome.
 * @param {string} input1
 * @param {string} input2
 * @param {string} label2
 * @param {string} type
 * @returns {boolean}
 */
function isEqual(input1, input2, label2, type) {
  if (input2.value.trim() == input1.value.trim()) {
    label2.innerText = type;
    label2.classList.add('text-white');
    label2.classList.remove('text-danger');
    input2.classList.remove('border-danger');
    label2.classList.remove('labelDanger');
    label2.classList.add('lh-lh');
    return true;
  } else {
    label2.innerText = `${type} needs to match Password`;
    label2.classList.remove('text-white');
    label2.classList.add('text-danger');
    input2.classList.add('border-danger');
    label2.classList.add('labelDanger');
    label2.classList.remove('lh-lh');
    return false;
  }
}
/**
 * function that checks if an input follows a pre defined format if so the function returns true,
 * else it returns false, the function also adds or removes classes and text based on the outcome.
 * @param {string} input
 * @param {string} type
 * @param {string} label
 * @param {string} rightFormat
 * @returns {boolean}
 */
function regexCheck(input, type, label, rightFormat) {
  const regexStud = /\S+@stud.noroff.no/;
  if (regexStud.test(input.value.trim()) === true) {
    label.innerText = type;
    label.classList.remove('text-danger');
    label.classList.add('text-white');
    input.classList.remove('border-danger');
    label.classList.remove('labelDanger');
    label.classList.add('lh-lh');
    return true;
  } else {
    label.innerText = `${type} must be a ${rightFormat} address`;
    label.classList.remove('text-white');
    label.classList.add('text-danger');
    label.classList.add('labelDanger');
    label.classList.remove('lh-lh');
    input.classList.add('border-danger');
    return false;
  }
}
/**
 * function that checks if a date format follows a pre determined format
 * @param {string} input
 * @param {string} type
 * @param {string} label
 * @param {string} rightFormat
 * @returns {boolean}
 */
function dateRegex(input, type, label, rightFormat) {
  let regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (regexDate.test(input.value.trim()) === true) {
    label.innerText = type;
    label.classList.remove('text-danger');
    label.classList.remove('labelDangerWhite');
    input.classList.remove('border-danger');
    return true;
  } else {
    label.innerText = `${type} must be in ${rightFormat} format`;
    label.classList.add('text-danger');
    label.classList.add('labelDangerWhite');
    input.classList.add('border-danger');
    return false;
  }
}
export { regexCheck, isEqual, checkLength, dateRegex };
