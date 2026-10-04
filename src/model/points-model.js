import { generatePoints } from '../mock/point.js';

class PointsModel {
  #points = generatePoints();

  get points() {
    return this.#points;
  }
}

export default PointsModel;
