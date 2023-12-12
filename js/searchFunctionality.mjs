/**
 * function that searches thru an array and returns a new array with objects that includes the search value eighter in the title or in the descriptions
 * @param {array} array
 * @param {string} searchInput
 * @returns
 */
function searchForAuction(array, searchInput) {
  let searchValue = searchInput.value.toLowerCase().trim();
  let searchedArray = array.filter((search) => {
    let { description, title } = search;
    if (title.toLowerCase().includes(searchValue)) {
      return true;
    } else if (description != null) {
      if (description.toLowerCase().includes(searchValue)) {
        return true;
      }
    }
  });
  return searchedArray;
}
export { searchForAuction };
