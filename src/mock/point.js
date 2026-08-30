import { generateOffers } from './offer.js';

import { getRandomPositiveInteger, getRandomArrayElement } from '../utils.js';

import {
  pointTypes, pointNames, pointDescriptions,
  photos, BasePrice, MinutesDuration, DaysDuration
} from './const.js';

import { POINTS_COUNT } from '../const.js';

const getDate = () => {
  const date = new Date();

  date.setDate(
    date.getDate() - getRandomPositiveInteger(DaysDuration.MIN, DaysDuration.MAX)
  );

  return date.toISOString();
};

const getPicture = (index) => ({
  src: photos[index],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
});

const generateDestination = () => ({
  description: getRandomArrayElement(pointDescriptions),
  name: getRandomArrayElement(pointNames),
  pictures: (getRandomPositiveInteger(0, 1))
    ? Array.from({length: getRandomPositiveInteger(1, photos.length)},
      (_value, index) => getPicture(index)
    )
    : []
});

const generatePoint = () => ({
  basePrice: getRandomPositiveInteger(BasePrice.MIN, BasePrice.MAX),
  destination: generateDestination(),
  isFavorite: Boolean(getRandomPositiveInteger(0, 1))
});

const generatePoints = () => {
  const points = Array.from({length: POINTS_COUNT}, generatePoint);
  const offers = [...generateOffers()];

  let dateFrom = getDate();

  return points.map((point, index) => {
    const type = getRandomArrayElement(pointTypes);
    const hasOffers = getRandomPositiveInteger(0, 1);
    const offersByType = offers.filter((offer) => offer.type === type);
    const currentOffers = (hasOffers)
      ? offersByType.slice(0, getRandomPositiveInteger(1, offersByType.length)).map((offer) => offer.id)
      : [];

    const dateTo = new Date(dateFrom);
    dateTo
      .setMinutes(
        dateTo.getMinutes() + getRandomPositiveInteger(MinutesDuration.MIN, MinutesDuration.MAX)
      );

    const newPoint = {
      id: String(index),
      dateFrom,
      dateTo: dateTo.toISOString(),
      offers: currentOffers,
      type,
      ...point
    };

    dateFrom = dateTo.toISOString();

    return newPoint;
  });
};

export { generatePoints };
