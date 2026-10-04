import SortView from '../view/sort-view.js';
import PointsContainerView from '../view/points-container-view.js';
import PointFormView from '../view/point-form-view.js';
import PointView from '../view/point-view.js';

import { render } from '../render.js';

class PointsPresenter {
  #pointsContainerComponent = new PointsContainerView();

  #container = null;
  #pointsModel = null;
  #offersModel = null;

  #points = [];

  constructor({ pointsContainer, pointsModel, offersModel }) {
    this.#container = pointsContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
  }

  init = () => {
    this.#points = [...this.#pointsModel.points];

    render(new SortView(), this.#container);
    render(this.#pointsContainerComponent, this.#container);

    const editPoint = this.#points[0];
    const offersByType = [...this.#offersModel.getOffersByType(editPoint.type)];
    render(new PointFormView({point: editPoint, offers: offersByType, isNew: false}), this.#pointsContainerComponent.element);

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  };

  #renderPoint = (point) => {
    const offers = [...this.#offersModel.getOffers(point)];
    const pointComponent = new PointView({point, offers});

    render(pointComponent, this.#pointsContainerComponent.element);
  };
}

export default PointsPresenter;
