import { createElement } from '../render.js';

const createPointsContainerTemplate = () =>
  `
    <ul class="trip-events__list"></ul>
  `;

class PointsContainerView {
  #element = null;

  get template() {
    return createPointsContainerTemplate();
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

export default PointsContainerView;
