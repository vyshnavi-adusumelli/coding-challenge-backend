class Property {
  constructor(index, price, squareFeet, pricePerSquareFeet, bedrooms, bathrooms) {
    this.index = index;
    this.price = price;
    this.squareFeet = squareFeet;
    this.pricePerSquareFeet = pricePerSquareFeet;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
}

module.exports = Property;