import { createTripEventInfoTemplate } from './trip-event-info-template.js';
import { createTripEventOffersTemplate } from './trip-event-offers-template.js';
import { createTripEventControlsTemplate } from './trip-event-controls-template.js';

import { createElement } from '../render.js';

const createTripEventTemplate = () =>
  `
    <li class="trip-events__item">
      <div class="event">
        ${createTripEventInfoTemplate()}

        ${createTripEventOffersTemplate()}

        ${createTripEventControlsTemplate()}
      </div>
    </li>
  `;

class TripEventView {
  getTemplate() {
    return createTripEventTemplate();
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

export default TripEventView;
