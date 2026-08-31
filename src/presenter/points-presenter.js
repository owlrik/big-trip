import SortView from '../view/sort-view.js';
import PointsContainerView from '../view/points-container-view.js';
import PointEditFormView from '../view/point-edit-form-view.js';
import PointView from '../view/point-view.js';

import { render } from '../render.js';

class PointsPresenter {
  pointsContainerComponent = new PointsContainerView();

  constructor({ pointsContainer, pointsModel, offersModel }) {
    this.container = pointsContainer;
    this.pointsModel = pointsModel;
    this.offersModel = offersModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(new SortView(), this.container);
    render(this.pointsContainerComponent, this.container);

    const offers = [...this.offersModel.getOffers(this.points[0])];
    render(new PointEditFormView(this.points[0], offers), this.pointsContainerComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new PointView({point: this.points[i]}), this.pointsContainerComponent.getElement());
    }
  }
}

export default PointsPresenter;
