import { createElement } from '../render.js';

const createPointsContainerTemplate = () =>
  `
    <ul class="trip-events__list"></ul>
  `;

class PointsContainerView {
  getTemplate() {
    return createPointsContainerTemplate();
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

export default PointsContainerView;
