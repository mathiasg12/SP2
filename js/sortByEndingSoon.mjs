/**
 * this function takes an array of objects and creates a new time called current time that is the current time, the function then copies the array and uses the sort method on the copied array,
 * the sort method takes each object and calculates the time difference between the current time and the endsAt propertie, it then returns timeA - timeB so if it returns a negative value,
 * it will place object a before b and if it is positive it places b before a, it then returns the sorted copied array.
 * @param {array} array
 * @returns array that is sorted
 */
function sortArray(array) {
  const currentTime = new Date();
  let copiedArray = array;
  copiedArray.sort((a, b) => {
    let timeA = Math.abs(new Date(a.endsAt) - currentTime);
    let timeB = Math.abs(new Date(b.endsAt) - currentTime);
    return timeA - timeB;
  });
  return copiedArray;
}
export { sortArray };
