import('chai').then(chai => {
  const expect = chai.expect;

  const Property = require('../src/model/Property');

  describe('Property', function() {
    it('should create a property with correct details', function() {
        const property = new Property(300000, 2000, 150, 3, 2);
        expect(property.price).to.equal(300000);
        expect(property.squareFeet).to.equal(2000);
        expect(property.pricePerSquareFeet).to.equal(150);
        expect(property.bedrooms).to.equal(3);
        expect(property.bathrooms).to.equal(2);
    });
  });
}).catch(err => console.error(err));