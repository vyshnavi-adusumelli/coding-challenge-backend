class Property {
  constructor() {
    this.price = 0;
    this.squareFeet = 0;
    this.pricePerSquareFeet = 0;
    this.bedrooms = 0;
    this.bathrooms = 0;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setSquareFeet(squareFeet) {
    this.squareFeet = squareFeet;
    return this;
  }

  setPricePerSquareFeet(pricePerSquareFeet) {
    this.pricePerSquareFeet = pricePerSquareFeet;
    return this;
  }

  setBedrooms(bedrooms) {
    this.bedrooms = bedrooms;
    return this;
  }

  setBathrooms(bathrooms) {
    this.bathrooms = bathrooms;
    return this;
  }

  build() {
    return new User({
        price: this.price,
        squareFeet: this.squareFeet,
        pricePerSquareFeet: this.pricePerSquareFeet,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms
    });
  }

}

module.exports = Property;