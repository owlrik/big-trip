import { formatStringToDate, formatStringToTime, getDatesDiff } from '../utils.js';

const createPointInfoTemplate = (point) => {
  const {
    type,
    destination,
    dateFrom,
    dateTo,
    basePrice
  } = point;

  const { name } = destination;

  const date = formatStringToDate(dateFrom);
  const startTime = formatStringToTime(dateFrom);
  const endTime = formatStringToTime(dateTo);
  const duration = getDatesDiff(dateFrom, dateTo);

  return `
    <time class="event__date" datetime="2019-03-18">${date}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">
      <span>${type}</span>
      <span>${name}</span>
    </h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${startTime}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T11:00">${endTime}</time>
      </p>
      <p class="event__duration">${duration}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
  `;
};

export { createPointInfoTemplate };
