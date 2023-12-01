/**
 * a simple function that takes a time with a format you wish to improve, and formats it to a easier to read format
 * @param {string} oldTime: the time format you wish to format
 * @returns {string} newTime: a better time format that is easier to read and better suited for auctions
 */
function improvedTimeFormat(oldTime) {
  let newTime = new Date(oldTime).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour24: 'true',
  });
  return newTime;
}
/**
 * function that converts a time format to iso format
 * @param {string} oldtime
 * @returns a new format for a string with the format DD/MM/YYYY
 */
function convertToIso(oldtime) {
  let [day, month, year] = oldtime.split('/');
  let isoTime = new Date(`${year}-${month}-${day} 12:00`).toISOString();
  return isoTime;
}
export { improvedTimeFormat, convertToIso };
