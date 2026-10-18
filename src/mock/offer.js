import { OfferPrice, offersByType, pointTypes } from './const.js';

import { getRandomPositiveIntegerByStep } from '../utils/common.js';

const generateOffers = () => {
  const PRICE_STEP = 10;
  let index = 1;

  return pointTypes.flatMap((type) =>
    offersByType[type].map((offer) => ({
      id: String(index++),
      title: offer,
      price: getRandomPositiveIntegerByStep(OfferPrice.MIN, OfferPrice.MAX, PRICE_STEP),
      type: type
    }))
  );
};

export { generateOffers };
