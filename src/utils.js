import { MONTH_NAMES } from './const.js';

const getRandomPositiveInteger = (a = 0, b = 1000) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomPositiveIntegerByStep = (a, b, step = 1) => {
  if (a < 0 || b < 0 || step <= 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const min = Math.ceil(lower / step);
  const max = Math.floor(upper / step);

  if (min > max) {
    return NaN;
  }

  return getRandomPositiveInteger(min, max) * step;
};

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getDatesDiff = (dateFrom, dateTo) => {
  const MILLISECONDS_PER_MINUTE = 6000;
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;

  const diffInMinutes = Math.floor((dateTo - dateFrom) / MILLISECONDS_PER_MINUTE);
  const diffInHours = Math.floor(diffInMinutes / MINUTES_PER_HOUR);
  const diffInDays = Math.floor(diffInHours / HOURS_PER_DAY);

  if (diffInMinutes < MINUTES_PER_HOUR) {
    return `${diffInMinutes}M`;
  } else if (diffInHours < HOURS_PER_DAY) {
    return `
      ${String(diffInHours).padStart(2, '0')}H
      ${String(Math.floor(diffInMinutes / MINUTES_PER_HOUR)).padStart(2, '0')}M`;
  } else {
    return `
      ${String(diffInDays).padStart(2, '0')}D
      ${String(Math.floor(diffInHours / HOURS_PER_DAY)).padStart(2, '0')}H
      ${String(Math.floor(diffInMinutes / MINUTES_PER_HOUR)).padStart(2, '0')}M`;
  }
};

const formatStringToDate = (dateIso) => {
  const date = new Date(dateIso);

  const month = MONTH_NAMES(date.getMonth());
  const day = date.getDate();

  return `${month} ${day}`;
};

const formatStringToTime = (dateIso) => {
  const date = new Date(dateIso);

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
};

const formatStringToDateWithTime = (dateIso) => {
  const date = new Date(dateIso);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2).padStart(2, '0');

  return `${day}/${month}/${year} ${formatStringToTime(dateIso)}`;
};

export {
  getRandomPositiveInteger,
  getRandomPositiveIntegerByStep,
  getRandomArrayElement,
  formatStringToDate,
  formatStringToTime,
  formatStringToDateWithTime,
  getDatesDiff
};

