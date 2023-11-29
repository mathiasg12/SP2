/**
 * small sort fuction to make sure the bids are correctly displayed, noticed that sometimes if a user places multiple bids the bid order breaks
 */
function orderedBids(array) {
  return array.sort((value1, value2) => {
    return value2.amount - value1.amount;
  });
}
export { orderedBids };
