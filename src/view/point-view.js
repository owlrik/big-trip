import { createPointInfoTemplate } from './point-info-template.js';
import { createPointOffersTemplate } from './point-offers-template.js';
import { createPointControlsTemplate } from './point-controls-template.js';

import { createElement } from '../render.js';

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

class PointView {
  #point = null;
  #offers = null;

  #element = null;

  constructor({ point, offers }) {
    this.#point = point;
    this.#offers = offers;
  }

  get template() {
    return createPointTemplate(this.#point, this.#offers);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

export default PointView;
