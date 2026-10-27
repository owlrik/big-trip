import { filter } from '../utils/filter.js';

const generateFilter = (points) => Object.entries(filter).map(
  ([filterName, filterPoints]) => ({
    name: filterName,
    isActive: Boolean(filterPoints(points).length)
  })
);

export { generateFilter };
