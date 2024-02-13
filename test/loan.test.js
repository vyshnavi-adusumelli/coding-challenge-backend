import('chai').then(chai => {
  const expect = chai.expect;

  const Loan = require('../src/model/Loan');
  const User = require('../src/model/User');

  describe('Loan', function() {
    it('should calculate the maximum loan correctly', async function() {
      const user = new User(120000);
      const loan = new Loan(user);
      const maxLoan = loan.calculateMaxLoan();
      expect(maxLoan).to.equal(1800000);
    });
  });
}).catch(err => console.error(err));