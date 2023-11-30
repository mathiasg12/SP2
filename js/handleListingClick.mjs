import { dateRegex, checkLength } from './validation.mjs';
import { convertToIso } from './timeFormat.mjs';
import { createListingObject } from './createListingObject.mjs';
import { AUCTION_URL } from './variables.mjs';
import { postListing } from './postListing.mjs';
async function handleListingClick(
  title,
  titleLabel,
  desc,
  descLabel,
  endDate,
  endDateLabel,
  mediaArray,
) {
  checkLength(title, 2, 'Title', titleLabel);
  checkLength(desc, 5, 'Description', descLabel);
  dateRegex(endDate, 'End Date', endDateLabel, 'DD/MM/YY');
  if (
    checkLength(title, 2, 'Title', titleLabel) == true &&
    checkLength(desc, 5, 'Description', descLabel) === true &&
    dateRegex(endDate, 'End Date', endDateLabel, 'DD/MM/YY') == true
  ) {
    await postListing(
      AUCTION_URL,
      createListingObject(
        title.value.trim(),
        desc.value.trim(),
        mediaArray,
        convertToIso(endDate.value.trim()),
      ),
    );
  } else {
    title.addEventListener('keyup', () => {
      checkLength(title, 2, 'Title', titleLabel);
    });
    desc.addEventListener('keyup', () => {
      checkLength(desc, 5, 'Description', descLabel);
    });
    endDate.addEventListener('keyup', () => {
      dateRegex(endDate, 'End Date', endDateLabel, 'DD/MM/YY');
    });
  }
}
export { handleListingClick };
