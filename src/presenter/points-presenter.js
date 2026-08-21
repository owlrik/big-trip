import SortView from '../view/sort-view.js';
import PointsContainerView from '../view/points-container-view.js';
import PointEditFormView from '../view/point-edit-form-view.js';
import PointView from '../view/point-view.js';

import { render } from '../render.js';

import { POINTS_COUNT } from '../const.js';

class PointsPresenter {
  pointsContainerComponent = new PointsContainerView();

  constructor({ pointsContainer }) {
    this.container = pointsContainer;
  }

  init() {
    render(new SortView(), this.container);
    render(this.pointsContainerComponent, this.container);
    render(new PointEditFormView(), this.pointsContainerComponent.getElement());

    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new PointView(), this.pointsContainerComponent.getElement());
    }
  }
}

export default PointsPresenter;
