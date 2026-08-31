import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import PointsPresenter from './presenter/points-presenter.js';

import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';

import { render, RenderPosition } from './render.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersElement = document.querySelector('.trip-controls__filters');
const pointsElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const offersModel = new OffersModel();
const pointsPresenter = new PointsPresenter({
  pointsContainer: pointsElement,
  pointsModel,
  offersModel
});

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersElement);

pointsPresenter.init();
