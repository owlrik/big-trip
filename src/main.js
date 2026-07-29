import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';

import { render } from './render.js';

const filtersContainerElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(new FilterView(), filtersContainerElement);
render(new SortView(), tripEventsElement);
