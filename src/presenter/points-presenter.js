import { render } from '../framework/render.js';

import PointPresenter from './point-presenter.js';

import SortView from '../view/sort-view.js';
import PointsContainerView from '../view/points-container-view.js';
import PointListEmptyView from '../view/point-list-empty-view.js';

import { updateItem } from '../utils/common.js';

class PointsPresenter {
  #container = null;
  #pointsModel = null;
  #offersModel = null;

  #pointPresenters = new Map();

  #sortComponent = new SortView();
  #pointsContainerComponent = new PointsContainerView();

  #points = [];

  constructor({ pointsContainer, pointsModel, offersModel }) {
    this.#container = pointsContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
  }

  init = () => {
    this.#points = [...this.#pointsModel.points];

    this.#renderPointBoard();
  };

  #renderPointBoard = () => {
    if (this.#points.length === 0) {
      this.#renderNoPoints(this.#container);
      return;
    }

    this.#renderSort(this.#container);
    this.#renderPointListContainer(this.#container);

    this.#renderPoints(this.#pointsContainerComponent.element);
  };

  #renderNoPoints = (container) => {
    render(new PointListEmptyView(), container);
  };

  #renderSort = (container) => {
    render(this.#sortComponent, container);
  };

  #renderPointListContainer = (container) => {
    render(this.#pointsContainerComponent, container);
  };

  #renderPoints = (container) => {
    this.#points.forEach((point) => {
      this.#renderPoint(point, container);
    });
  };

  #renderPoint = (point, container) => {
    const availableOffers = [...this.#offersModel.getOffersByType(point.type)];
    const selectedOffers = [...this.#offersModel.getOffers(point)];

    const pointPresenter = new PointPresenter({
      container,
      onDataChange: this.#pointChangeHandler,
      onModeChange: this.#modeChangeHandler
    });

    pointPresenter.init(point, availableOffers, selectedOffers);

    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #clearPointList = () => {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  };

  #pointChangeHandler = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);

    const availableOffers = [...this.#offersModel.getOffersByType(updatedPoint.type)];
    const selectedOffers = [...this.#offersModel.getOffers(updatedPoint)];

    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, availableOffers, selectedOffers);
  };

  #modeChangeHandler = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}

export default PointsPresenter;
