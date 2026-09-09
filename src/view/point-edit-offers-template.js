const createPointEditOffersTemplate = ({ selectedOffers, offers }) => {
  if (!offers || !offers.length) {
    return '';
  }

  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${offers.map(({ id, title, price }) => `
          <div class="event__offer-selector">
            <input
              class="event__offer-checkbox  visually-hidden"
              id="event-offer-${id}"
              type="checkbox"
              name="event-offer-${id}"
              ${selectedOffers.some((offerId) => offerId === id) ? 'checked' : ''}
            >
            <label class="event__offer-label" for="event-offer-${id}">
              <span class="event__offer-title">${title}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${price}</span>
            </label>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

export { createPointEditOffersTemplate };
