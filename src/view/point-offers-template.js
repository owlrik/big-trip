const createPointOffersTemplate = (offers) => {
  if (!offers || !offers.length) {
    return '';
  }

  return `
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offers.map(({ title, price }) => `
        <li class="event__offer">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </li>
      `).join('')}
    </ul>
  `;
};

export { createPointOffersTemplate };
