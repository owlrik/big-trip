import { MONTH_NAMES } from '../const.js';

const getDatesDiff = (dateIsoFrom, dateIsoTo) => {
  const MILLISECONDS_PER_MINUTE = 60000;
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;

  const diffInMinutes = Math.floor((new Date(dateIsoTo) - new Date(dateIsoFrom)) / MILLISECONDS_PER_MINUTE);
  const days = Math.floor(diffInMinutes / (MINUTES_PER_HOUR * HOURS_PER_DAY));
  const hours = Math.floor(diffInMinutes / MINUTES_PER_HOUR) % HOURS_PER_DAY;
  const minutes = diffInMinutes % MINUTES_PER_HOUR;

  if (diffInMinutes < MINUTES_PER_HOUR) {
    return `${diffInMinutes}M`;
  } else if (days === 0) {
    return `
      ${String(hours).padStart(2, '0')}H
      ${String(minutes).padStart(2, '0')}M`;
  } else {
    return `
      ${String(days).padStart(2, '0')}D
      ${String(hours).padStart(2, '0')}H
      ${String(minutes).padStart(2, '0')}M`;
  }
};

const formatStringToDate = (dateIso) => {
  const date = new Date(dateIso);

  const month = MONTH_NAMES[date.getMonth()];
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
  formatStringToDate,
  formatStringToTime,
  formatStringToDateWithTime,
  getDatesDiff
};
