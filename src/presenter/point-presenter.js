import {render, replace} from '../framework/render.js';

import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form-view.js';

import { isEscapeKey } from '../utils/common.js';

class PointPresenter {
  #container = null;

  #pointComponent = null;
  #pointFormComponent = null;

  #point = null;
  #availableOffers = null;
  #selectedOffers = null;
  #isNew = false;

  constructor({ container }) {
    this.#container = container;
  }

  init = (point, availableOffers, selectedOffers) => {
    this.#point = point;
    this.#availableOffers = availableOffers;
    this.#selectedOffers = selectedOffers;

    this.#pointComponent = new PointView({point: this.#point, offers: this.#selectedOffers});
    this.#pointFormComponent = new PointFormView({point: this.#point, offers: this.#availableOffers, isNew: this.#isNew});

    this.#pointComponent.setEditButtonClickHandler(this.#editButtonClickHandler);
    this.#pointFormComponent.setFormSubmitHandler(this.#formSubmitHandler);
    this.#pointFormComponent.setButtonCloseHandler(this.#buttonCloseHandler);

    render(this.#pointComponent, this.#container);
  };

  #replacePointCardToForm = () => {
    replace(this.#pointFormComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #replacePointFormToCard = () => {
    replace(this.#pointComponent, this.#pointFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #editButtonClickHandler = () => {
    this.#replacePointCardToForm();
  };

  #formSubmitHandler = () => {
    this.#replacePointFormToCard();
  };

  #buttonCloseHandler = () => {
    this.#replacePointFormToCard();
  };

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replacePointFormToCard();
    }
  };
}

export default PointPresenter;
