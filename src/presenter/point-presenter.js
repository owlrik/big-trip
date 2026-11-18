import { render, replace, remove } from '../framework/render.js';

import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form-view.js';

import { isEscapeKey } from '../utils/common.js';

import { PointMode } from '../const.js';

class PointPresenter {
  #container = null;

  #pointComponent = null;
  #pointFormComponent = null;

  #point = null;
  #availableOffers = null;
  #selectedOffers = null;
  #isNew = false;

  #mode = PointMode.DEFAULT;

  #pointChangeHandler = null;
  #modeChangeHandler = null;

  constructor({ container, onDataChange, onModeChange }) {
    this.#container = container;
    this.#pointChangeHandler = onDataChange;
    this.#modeChangeHandler = onModeChange;
  }

  init = (point, availableOffers, selectedOffers) => {
    this.#point = point;
    this.#availableOffers = availableOffers;
    this.#selectedOffers = selectedOffers;

    const prevPointComponent = this.#pointComponent;
    const prevPointFormComponent = this.#pointFormComponent;

    this.#pointComponent = new PointView({point: this.#point, offers: this.#selectedOffers});
    this.#pointFormComponent = new PointFormView({point: this.#point, offers: this.#availableOffers, isNew: this.#isNew});

    this.#pointComponent.setFavoriteButtonClickHandler(this.#favoriteButtonClickHandler);
    this.#pointComponent.setEditButtonClickHandler(this.#editButtonClickHandler);
    this.#pointFormComponent.setFormSubmitHandler(this.#formSubmitHandler);
    this.#pointFormComponent.setButtonCloseHandler(this.#buttonCloseHandler);

    if (prevPointComponent === null || prevPointFormComponent === null) {
      render(this.#pointComponent, this.#container);
      return;
    }

    if (this.#mode === PointMode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === PointMode.EDITING) {
      replace(this.#pointFormComponent, prevPointFormComponent);
    }

    remove(prevPointComponent);
    remove(prevPointFormComponent);
  };

  destroy = () => {
    remove(this.#pointComponent);
    remove(this.#pointFormComponent);
  };

  resetView = () => {
    if (this.#mode !== PointMode.DEFAULT) {
      this.#replacePointFormToCard();
    }
  };

  #replacePointCardToForm = () => {
    replace(this.#pointFormComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#modeChangeHandler();
    this.#mode = PointMode.EDITING;
  };

  #replacePointFormToCard = () => {
    replace(this.#pointComponent, this.#pointFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = PointMode.DEFAULT;
  };

  #editButtonClickHandler = () => {
    this.#replacePointCardToForm();
  };

  #formSubmitHandler = (point) => {
    this.#pointChangeHandler(point);
    this.#replacePointFormToCard();
  };

  #buttonCloseHandler = () => {
    this.#replacePointFormToCard();
  };

  #favoriteButtonClickHandler = () => {
    this.#pointChangeHandler({
      ...this.#point,
      isFavorite: !this.#point.isFavorite
    });
  };

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replacePointFormToCard();
    }
  };
}

export default PointPresenter;
