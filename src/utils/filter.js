import { FilterType } from '../const.js';

import { isCurrentPoint, isFuturePoint, isPastPoint } from './point.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => [...points],
  [FilterType.FUTURE]: (points) => points.filter((point) => isFuturePoint(point) || isCurrentPoint(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastPoint(point) || isCurrentPoint(point))
};

export { filter };
