function checkLength(input, length) {
  if (input >= length) {
    return true;
  } else {
    return false;
  }
}
function isEqual(input1, input2) {
  if (input1.value.trim() == input2.value.trim()) {
    return true;
  } else {
    return false;
  }
}
function regexCheck(input) {
  const regexStud = /\S+@stud.noroff.no/;
  if (regexStud.test(input) === true) {
    return true;
  } else {
    return false;
  }
}
