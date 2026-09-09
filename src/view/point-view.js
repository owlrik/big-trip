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
  constructor({ point, offers }) {
    this.point = point;
    this.offers = offers;
  }

  getTemplate() {
    return createPointTemplate(this.point, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

export default PointView;
