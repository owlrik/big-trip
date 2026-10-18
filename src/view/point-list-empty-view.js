import AbstractView from '../framework/view/abstract-view.js';

const createPointListEmptyTemplate = () =>
  `
    <p class="trip-events__msg">Click New Event to create your first point</p>
  `;

class PointListEmptyView extends AbstractView {
  get template() {
    return createPointListEmptyTemplate();
  }
}

export default PointListEmptyView;
