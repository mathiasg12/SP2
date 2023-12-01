/**
 * function that makes an object with four propertys, title,description,media array and end date
 * @param {string} title
 * @param {string} desc
 * @param {array} mediaArray
 * @param {string} endsAt
 * @returns {object}
 */
function createListingObject(title, desc, mediaArray, endsAt) {
  return {
    title: title,
    description: desc,
    media: mediaArray,
    endsAt: endsAt,
  };
}
export { createListingObject };
