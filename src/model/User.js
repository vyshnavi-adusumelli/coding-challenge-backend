class User {
  constructor(annualIncome) {
    this.annualIncome = annualIncome;
    this.requirements = {};
  }

  setRequirements(squareFeet, bedrooms, bathrooms) {
    this.requirements = { squareFeet, bedrooms, bathrooms };
  }
}

module.exports = User;