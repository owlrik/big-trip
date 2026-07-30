import SortView from '../view/sort-view.js';
import TripEventsContainerView from '../view/trip-events-container-view.js';
import TripEventEditFormView from '../view/trip-event-edit-form-view.js';
import TripEventView from '../view/trip-event-view.js';

import { render } from '../render.js';

import { TRIP_EVENTS_COUNT } from '../const.js';

class TripEventsPresenter {
  tripEventsContainerComponent = new TripEventsContainerView();

  constructor({ tripEventsContainer }) {
    this.container = tripEventsContainer;
  }

  init() {
    render(new SortView(), this.container);
    render(this.tripEventsContainerComponent, this.container);
    render(new TripEventEditFormView(), this.tripEventsContainerComponent.getElement());

    for (let i = 0; i < TRIP_EVENTS_COUNT; i++) {
      render(new TripEventView(), this.tripEventsContainerComponent.getElement());
    }
  }
}

export default TripEventsPresenter;
