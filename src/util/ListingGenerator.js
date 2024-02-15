const Property = require('../model/Property');
const LoanConstants = require('./LoanConstants');
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class ListingGenerator {

  static meetsRestrictions(price, squareFeet, bedrooms, bathrooms) {
    if (squareFeet < LoanConstants.MIN_SQUARE_FEET || price < LoanConstants.MIN_LOAN) return false;
    if (squareFeet > price * LoanConstants.MAX_SQUARE_FEET_RATE) return false;
    if (bedrooms > squareFeet / LoanConstants.BEDROOM_PER_SQUARE_FEET) return false;
    if (bathrooms > bedrooms) return false;
    return true;
  }

  static adjustPricing(listings) {
    const count = listings.length;
    const adjustmentFactor = (LoanConstants.ADJUSTMENT_FACTOR - count) * LoanConstants.ADJUSTMENT_RATE;
    listings.forEach(listing => {
      listing.price *= (1 + adjustmentFactor);
    });
  }

  static isUnique(price, squareFeet, bedrooms, bathrooms, listings) {
    return !listings.some(existingListing =>
      !(existingListing.price !== price || existingListing.squareFeet !== squareFeet ||
        existingListing.bedrooms !== bedrooms ||
        existingListing.bathrooms !== bathrooms)
      );
    }

  static generateListings(maxLoanAmount, buyerRequirements) {
    let listings = [];
    const targetListingsCount = randomInt(LoanConstants.MIN_LISTINGS, LoanConstants.MAX_LISTINGS);

    while (listings.length < targetListingsCount) {
      const price = randomInt(LoanConstants.MIN_LOAN, maxLoanAmount);
      const squareFeet = randomInt(LoanConstants.MIN_SQUARE_FEET, price * LoanConstants.MAX_SQUARE_FEET_RATE);
      const bedrooms = randomInt(1, Math.max(1, Math.floor(squareFeet / LoanConstants.BEDROOM_PER_SQUARE_FEET)));
      const bathrooms = randomInt(1, bedrooms);

      if (this.meetsRestrictions(price, squareFeet, bedrooms, bathrooms) &&
          this.isUnique(price, squareFeet, bedrooms, bathrooms, listings) &&
          squareFeet >= buyerRequirements.squareFeet &&
          bedrooms >= buyerRequirements.bedrooms &&
          bathrooms >= buyerRequirements.bathrooms) {
        listings.push(new Property()
            .setPrice(price).setSquareFeet(squareFeet).setPricePerSquareFeet(price / squareFeet)
            .setBedrooms(bedrooms).setBathrooms(bathrooms));
      }
    }

    this.adjustPricing(listings);
    return listings;
  }
}

module.exports = ListingGenerator;