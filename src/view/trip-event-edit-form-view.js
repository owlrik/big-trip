import { createTripEventTypeListTemplate } from './trip-event-type-list-template.js';
import { createTripEventDestinationTemplate } from './trip-event-destination-template.js';
import { createTripEventTimeTemplate } from './trip-event-time-template.js';
import { createTripEventPriceTemplate } from './trip-event-price-template.js';
import { createTripEventEditOffersTemplate } from './trip-event-edit-offers-template.js';
import { createTripEventEditInfoTemplate } from './trip-event-edit-info-template.js';

import { createElement } from '../render.js';

const createTripEventFormTemplate = () =>
  `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            ${createTripEventTypeListTemplate()}
          </div>

          ${createTripEventDestinationTemplate()}

          ${createTripEventTimeTemplate()}

          ${createTripEventPriceTemplate()}

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>

        <section class="event__details">
          ${createTripEventEditOffersTemplate()}

          ${createTripEventEditInfoTemplate()};
        </section>
      </form>
    </li>
  `;

class TripEventAddFormView {
  getTemplate() {
    return createTripEventFormTemplate();
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

export default TripEventAddFormView;
