import { createPointTypeListTemplate } from './point-type-list-template.js';
import { createPointDestinationTemplate } from './point-destination-template.js';
import { createPointTimeTemplate } from './point-time-template.js';
import { createPointPriceTemplate } from './point-price-template.js';
import { createPointEditOffersTemplate } from './point-edit-offers-template.js';
import { createPointDestinationInfoTemplate } from './point-destination-info-template.js';

import { createElement } from '../render.js';

const createPointFormTemplate = (point, offers, isNew) => {
  const {
    type,
    destination,
    dateFrom,
    dateTo,
    basePrice
  } = point;

  const addPointControls = `
    <button class="event__reset-btn" type="reset">Cancel</button>
  `;

  const editPointControls = `
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  `;

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            ${createPointTypeListTemplate()}
          </div>

          ${createPointDestinationTemplate({type, destination})}

          ${createPointTimeTemplate({dateFrom, dateTo})}

          ${createPointPriceTemplate(isNew, basePrice)}

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          ${isNew ? addPointControls : editPointControls}
        </header>

        <section class="event__details">
          ${createPointEditOffersTemplate({selectedOffers: point.offers, offers})}

          ${createPointDestinationInfoTemplate(destination)}
        </section>
      </form>
    </li>
  `;
};

class PointFormView {
  constructor({ point, offers, isNew }) {
    this.point = point;
    this.offers = offers;
    this.isNew = isNew;
  }

  getTemplate() {
    return createPointFormTemplate(this.point, this.offers, this.isNew);
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

export default PointFormView;
