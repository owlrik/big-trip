import { createPointInfoTemplate } from './point-info-template.js';
import { createPointOffersTemplate } from './point-offers-template.js';
import { createPointControlsTemplate } from './point-controls-template.js';

import { createElement } from '../render.js';

const createPointTemplate = () =>
  `
    <li class="trip-events__item">
      <div class="event">
        ${createPointInfoTemplate()}

        ${createPointOffersTemplate()}

        ${createPointControlsTemplate()}
      </div>
    </li>
  `;

class PointView {
  getTemplate() {
    return createPointTemplate();
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
