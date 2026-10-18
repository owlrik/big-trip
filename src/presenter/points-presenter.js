import SortView from '../view/sort-view.js';
import PointsContainerView from '../view/points-container-view.js';
import PointListEmptyView from '../view/point-list-empty-view.js';
import PointFormView from '../view/point-form-view.js';
import PointView from '../view/point-view.js';

import { render } from '../render.js';

import { isEscapeKey } from '../utils.js';

class PointsPresenter {
  #pointsContainerComponent = new PointsContainerView();
  #selectedPointComponent = null;
  #pointFormComponent = null;

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

    this.#renderPointBoard();
  };

  #renderPointBoard = () => {
    if (this.#points.length === 0) {
      render(new PointListEmptyView(), this.#container);
      return;
    }

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

    pointComponent.setEditButtonClickHandler(() => {
      this.#selectedPointComponent = pointComponent;
      this.#pointFormComponent = pointFormComponent;
      this.#replacePointCardToForm();
      document.addEventListener('keydown', this.#onEscKeyDown);
    });

    pointFormComponent.setFormSubmitHandler(() => {
      this.#replacePointFormToCard();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    });

    pointFormComponent.setButtonCloseHandler(() => {
      this.#replacePointFormToCard();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    });

    render(pointComponent, this.#pointsContainerComponent.element);
  };

  #replacePointCardToForm = () => {
    this.#pointsContainerComponent.element.replaceChild(this.#pointFormComponent.element, this.#selectedPointComponent.element);
  };

  #replacePointFormToCard = () => {
    this.#pointsContainerComponent.element.replaceChild(this.#selectedPointComponent.element, this.#pointFormComponent.element);
  };

  #onEscKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replacePointFormToCard();
    }
  };
}

export default PointsPresenter;
