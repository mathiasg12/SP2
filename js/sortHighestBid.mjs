/**
 * small sort fuction to make sure the bids are correctly displayed, I noticed that sometimes if a user places multiple bids on the same item the bid order breaks
 */
function orderedBids(array) {
  return array.sort((value1, value2) => {
    return value2.amount - value1.amount;
  });
}
export { orderedBids };
