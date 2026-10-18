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
}

export default PointView;
