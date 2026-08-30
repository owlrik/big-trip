import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import PointsPresenter from './presenter/points-presenter.js';

import { generatePoints } from './mock/point.js';
import { generateOffers } from './mock/offer.js';

import { render, RenderPosition } from './render.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersElement = document.querySelector('.trip-controls__filters');
const pointsElement = document.querySelector('.trip-events');

const pointsPresenter = new PointsPresenter({pointsContainer: pointsElement});

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersElement);

pointsPresenter.init();

const points = generatePoints();
const offers = generateOffers();

console.log(points, offers);
