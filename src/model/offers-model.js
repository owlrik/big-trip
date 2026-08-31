import { generateOffers } from '../mock/offer.js';

class OffersModel {
  allOffers = [];
  offers = [];
  offersByType = [];

  constructor() {
    this.allOffers = generateOffers();
  }

  getOffers(point) {
    this.offers = point.offers.map((offerId) =>
      this.allOffers.find((offer) =>
        offer.id === offerId
      )
    );

    return this.offers;
  }

  getOffersByType(type) {
    this.offersByType = this.allOffers.filter((offer) =>
      offer.type === type
    );

    return this.offersByType;
  }
}

export default OffersModel;
