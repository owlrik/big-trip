import { generatePoints } from '../mock/point.js';

class PointsModel {
  points = generatePoints();

  getPoints() {
    return this.points;
  }
}

export default PointsModel;
