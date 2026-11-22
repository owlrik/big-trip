const MONTH_NAMES = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

const POINTS_COUNT = 20;

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past'
};

const PointMode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

const SortMode = {
  DEFAULT: 'day',
  TIME: 'time',
  PRICE: 'price'
};

export {
  POINTS_COUNT,
  MONTH_NAMES,
  FilterType,
  PointMode,
  SortMode
};
