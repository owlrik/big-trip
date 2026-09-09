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

    const editPoint = this.points[0];
    const offersByType = [...this.offersModel.getOffersByType(editPoint.type)];
    render(new PointEditFormView({point: editPoint, offers: offersByType}), this.pointsContainerComponent.getElement());

    for (let i = 1; i < this.points.length; i++) {
      const point = this.points[i];
      const pointOffers = [...this.offersModel.getOffers(point)];
      render(new PointView({point, offers: pointOffers}), this.pointsContainerComponent.getElement());
    }
  }
}

export default PointsPresenter;
