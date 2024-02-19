import('chai').then(chai => {
  const expect = chai.expect;

  const User = require('../src/model/User');

  describe('User', function() {
    it('should store user annual income and requirements correctly', function() {
        const user = new User(100000);
        user.setRequirements(1500, 3, 2);
        expect(user.annualIncome).to.equal(100000);
        expect(user.requirements).to.equal({ squareFeet: 1500, bedrooms: 3, bathrooms: 2 });
    });
  });
}).catch(err => console.error(err));
