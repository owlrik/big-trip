import { createElement } from '../render.js';

const createTripEventsContainerTemplate = () =>
  `
    <ul class="trip-events__list"></ul>
  `;

class TripEventsContainerView {
  getTemplate() {
    return createTripEventsContainerTemplate();
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

export default TripEventsContainerView;
