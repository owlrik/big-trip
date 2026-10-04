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

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  };

  #renderPoint = (point) => {
    const selectedOffers = [...this.#offersModel.getOffers(point)];
    const pointComponent = new PointView({point, offers: selectedOffers});

    const availableOffers = [...this.#offersModel.getOffersByType(point.type)];
    const pointFormComponent = new PointFormView({point, offers: availableOffers, isNew: false});

    const pointEditButtonElement = pointComponent.element.querySelector('.event__rollup-btn');
    const pointFormElement = pointFormComponent.element.querySelector('.event');
    const pointFormCloseButtonElement = pointFormComponent.element.querySelector('.event__rollup-btn');

    pointEditButtonElement.addEventListener('click', () => {
      this.#replacePointCardToForm(pointComponent.element, pointFormComponent.element);
    });

    pointFormElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.#replacePointFormToCard(pointComponent.element, pointFormComponent.element);
    });

    pointFormCloseButtonElement.addEventListener('click', () => {
      this.#replacePointFormToCard(pointComponent.element, pointFormComponent.element);
    });

    render(pointComponent, this.#pointsContainerComponent.element);
  };

  #replacePointCardToForm = (cardElement, formElement) => {
    this.#pointsContainerComponent.element.replaceChild(formElement, cardElement);
  };

  #replacePointFormToCard = (cardElement, formElement) => {
    this.#pointsContainerComponent.element.replaceChild(cardElement, formElement);
  };
}

export default PointsPresenter;
