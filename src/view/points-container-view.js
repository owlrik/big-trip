import AbstractView from '../framework/view/abstract-view.js';

const createPointsContainerTemplate = () =>
  `
    <ul class="trip-events__list"></ul>
  `;

class PointsContainerView extends AbstractView {
  get template() {
    return createPointsContainerTemplate();
  }
}

export default PointsContainerView;
