class User {
  constructor() {
    this.annualIncome = 0;
    this.requirements = {};
    this.maxLoan = 0;
  }

  setRequirements(squareFeet, bedrooms, bathrooms) {
    this.requirements = { squareFeet, bedrooms, bathrooms };
    return this;
  }

  setMaxLoan(maximumLoan) {
    this.maxLoan = maximumLoan;
    return this;
  }

  setAnnualIncome(income) {
    this.annualIncome = income;
    return this;
  }

  build() {
    return new User({
        annualIncome: this.annualIncome,
        requirements: this.requirements,
        maxLoan: this.maxLoan
    });
  }
}

module.exports = User;