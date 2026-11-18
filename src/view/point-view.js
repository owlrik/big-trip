import AbstractView from '../framework/view/abstract-view.js';

import { createPointInfoTemplate } from './point-info-template.js';
import { createPointOffersTemplate } from './point-offers-template.js';
import { createPointControlsTemplate } from './point-controls-template.js';

const createPointTemplate = (point, offers) =>
  `
    <li class="trip-events__item">
      <div class="event">
        ${createPointInfoTemplate(point)}

        ${createPointOffersTemplate(offers)}

        ${createPointControlsTemplate(point)}
      </div>
    </li>
  `;

class PointView extends AbstractView {
  #point = null;
  #offers = null;

  constructor({ point, offers }) {
    super();

    this.#point = point;
    this.#offers = offers;
  }

  get template() {
    return createPointTemplate(this.#point, this.#offers);
  }

  setFavoriteButtonClickHandler = (callback) => {
    this._callback.favoriteButtonClick = callback;

    const pointFavoriteButtonElement = this.element.querySelector('.event__favorite-btn');

    pointFavoriteButtonElement.addEventListener('click', this.#favoriteButtonClickHandler);
  };

  setEditButtonClickHandler = (callback) => {
    this._callback.editButtonClick = callback;

    const pointEditButtonElement = this.element.querySelector('.event__rollup-btn');

    pointEditButtonElement.addEventListener('click', this.#editButtonClickHandler);
  };

  #favoriteButtonClickHandler = (evt) => {
    evt.preventDefault();

    this._callback.favoriteButtonClick();
  };

  #editButtonClickHandler = (evt) => {
    evt.preventDefault();

    this._callback.editButtonClick();
  };
}

export default PointView;
