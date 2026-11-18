import { render, replace } from '../framework/render.js';

import SortView from '../view/sort-view.js';
import PointsContainerView from '../view/points-container-view.js';
import PointListEmptyView from '../view/point-list-empty-view.js';
import PointFormView from '../view/point-form-view.js';
import PointView from '../view/point-view.js';

import { isEscapeKey } from '../utils/common.js';

class PointsPresenter {
  #container = null;
  #pointsModel = null;
  #offersModel = null;

  #sortComponent = new SortView();
  #pointsContainerComponent = new PointsContainerView();
  #selectedPointComponent = null;
  #pointFormComponent = null;

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

    this.#renderPoints();
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

  #renderPoints = () => {
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
    replace(this.#pointFormComponent, this.#selectedPointComponent);
  };

  #replacePointFormToCard = () => {
    replace(this.#selectedPointComponent, this.#pointFormComponent);
  };

  #onEscKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replacePointFormToCard();
    }
  };
}

export default PointsPresenter;
