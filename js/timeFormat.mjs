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
function convertToIso(oldtime) {
  let isoTime = new Date(oldtime + ' ' + '12:00').toISOString();
  return isoTime;
}
export { improvedTimeFormat, convertToIso };
