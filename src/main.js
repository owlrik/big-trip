import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';

import { render, RenderPosition } from './render.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersContainerElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const tripEventsPresenter = new TripEventsPresenter({tripEventsContainer: tripEventsElement});

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersContainerElement);

tripEventsPresenter.init();
