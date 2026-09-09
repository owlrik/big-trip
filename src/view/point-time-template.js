import { formatStringToDateWithTime } from '../utils.js';

const createPointTimeTemplate = ({ dateFrom, dateTo }) => {
  const startDate = formatStringToDateWithTime(dateFrom);
  const endDate = formatStringToDateWithTime(dateTo);

  return `
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate}">
    </div>
  `;
};

export { createPointTimeTemplate };
