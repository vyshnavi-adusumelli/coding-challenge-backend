const Property = require('./Property');
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class ListingGenerator {

  static meetsRestrictions(price, squareFeet, bedrooms, bathrooms) {
    if (squareFeet < 250 || price < 50000) return false;
    if (squareFeet > price * 0.0125) return false;
    if (bedrooms > squareFeet / 400) return false;
    if (bathrooms > bedrooms) return false;
    return true;
  }

  static adjustPricing(listings) {
    const count = listings.length;
    const adjustmentFactor = (7 - count) * 0.02;
    listings.forEach(listing => {
      listing.price *= (1 + adjustmentFactor);
    });
  }

  static generateListings(maxLoanAmount, buyerRequirements) {
    let listings = [];
    let index = 0;
    const targetListingsCount = randomInt(2, 12);

    while (listings.length < targetListingsCount) {
      const price = randomInt(50000, maxLoanAmount);
      const squareFeet = randomInt(250, price * 0.0125);
      const bedrooms = randomInt(1, Math.max(1, Math.floor(squareFeet / 400)));
      const bathrooms = randomInt(1, bedrooms);

      if (this.meetsRestrictions(price, squareFeet, bedrooms, bathrooms) &&
          squareFeet >= buyerRequirements.squareFeet &&
          bedrooms >= buyerRequirements.bedrooms &&
          bathrooms >= buyerRequirements.bathrooms) {
        listings.push(new Property(++index, price, squareFeet, price / squareFeet, bedrooms, bathrooms));
      }
    }

    this.adjustPricing(listings);
    return listings;
  }
}

module.exports = ListingGenerator;