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
  console.log(searchedArray);
  return searchedArray;
}
export { searchForAuction };
